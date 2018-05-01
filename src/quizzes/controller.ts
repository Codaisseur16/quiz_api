import { Post, Param, HttpCode, Get, Body, Patch, JsonController } from 'routing-controllers'
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

    //look at the questions controller @post to see what changes charize made to make this one work

    @Patch('/quizzes/:id([0-9]+)')
    async updateGame(
        @Param('id') quizId: Number,
        @Body() update//: GameUpdate
    ) {
        console.log('At line1 Patch')

        let quiz = await Quiz.findOneById(quizId)

        console.log('At line2 Patch')

        quiz = update

        await quiz.save()
    }

    @Get('/quizzes')
    @HttpCode(201)
    getQuizzes(){
        return Quiz.find()
    }
}