import { Post, Param, HttpCode, Get, Body, Patch, JsonController, Delete, NotFoundError } from 'routing-controllers'
import { Quiz } from './entity'
import * as request from 'superagent'

@JsonController()
export default class QuizController {

    @Post('/quizzes')
    @HttpCode(201)
    async createQuiz(
        @Body() quiz: Quiz
    ) {
      const entity = await quiz.save()

      return await request
      .post('http://webhooks:4004/postquizwh/')
      .send({url:"somethingElse", qid: entity.id} )
      .then(quiz2=> {
        return quiz2.text})
    }

    @Patch('/quizzes/:id([0-9]+)')
    async updateQuiz(
        @Param('id') quizId: Number,
        @Body() update//: GameUpdate
    ) {
        console.log('At line1 Patch')

        let quiz = await Quiz.findOneById(quizId)

        console.log('At line2 Patch')

        quiz = await update
        if(quiz){
            return quiz.save()
        } else {
            return "error"
        }
    }

    @Get('/quizzes')
    @HttpCode(201)
    getQuizzes(){
        return Quiz.find()
    }

    @Get('/quizzes/:id([0-9]+)')
    @HttpCode(201)
    async getQuizById(
        @Param('id') quizId: number
    ) {
        const quizById = await Quiz.findOneById(quizId)

        if (!quizById) throw new NotFoundError('Quiz doesn\'t exist')
        
        if (quizById) {
        return {quizById}
        }
    }


    @Delete('/quizzes/:id')
    async deleteQuiz(
        @Param('id') id: number
    ) {
        const quiz = await Quiz.findOneById(id)

        if (!quiz) throw new NotFoundError('Quiz doesn\'t exist')

        if (quiz) Quiz.removeById(id)
        return 'successfully deleted'
    }
}
