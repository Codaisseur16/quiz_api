import { Post, Param, HttpCode, Get, Body, Patch, JsonController, Delete, NotFoundError } from 'routing-controllers'
import { Quiz } from './entity'

@JsonController()
export default class QuizController {
    @Post('/quizzes')
    @HttpCode(201)
    async createQuiz(
        @Body() quiz: Quiz
    ) {
        const entity = await quiz.save()

        return { entity }
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