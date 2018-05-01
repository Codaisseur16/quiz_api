import {
    Post, Param, HttpCode, Get,
    Body, Patch, JsonController
} from 'routing-controllers'
import { Quiz } from './entity'

@JsonController()
export default class QuizController {
    @Post('/quizzes')
    @HttpCode(201)
    async createQuiz(
        //@CurrentUser() user: User
    ) {
        const entity = await Quiz.create().save()

        return entity
    }

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