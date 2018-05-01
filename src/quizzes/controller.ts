import {
    JsonController, Authorized, CurrentUser, Post, Param, BadRequestError, HttpCode, NotFoundError, ForbiddenError, Get,
    Body, Patch
} from 'routing-controllers'
import Quiz from './entity'

export default class QuizController {
    @Post('/quizzes')
    @HttpCode(201)
    async createQuiz(
        //@CurrentUser() user: User
    ) {
        const entity = await Quiz.create().Save()

        return entity
    }

    @Patch('/games/:id([0-9]+)')
    async updateGame(
        @Param('id') quizId: number,
        @Body() update//: GameUpdate
    ) {
        console.log('At line1 Patch')

        let quiz = await Quiz.findOneById(quizId)

        console.log('At line2 Patch')

        quiz = update

        await quiz.save()
    }

    @Get('/games')
    @HttpCode(201)
    getQuizzes(){
        return Quiz.find()
    }
}