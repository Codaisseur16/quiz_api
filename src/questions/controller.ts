
import {
    JsonController, Authorized, CurrentUser, Post, Param, BadRequestError, HttpCode, NotFoundError, ForbiddenError, Get,
    Body, Patch
} from 'routing-controllers'
import Question from './entity'

export default class QuestionController {
    @Post('/questions')
    @HttpCode(201)
    async createQuiz(
        //@CurrentUser() user: User
    ) {
        const entity = await Question.create().Save()

        return entity
    }

    @Patch('/games/:id([0-9]+)')
    async updateGame(
        @Param('id') questionId: number,
        @Body() update//: GameUpdate
    ) {
        console.log('At line1 Patch')

        let question = await Question.findOneById(questionId)

        console.log('At line2 Patch')

        question = update

        await question.save()
    }

    @Get('/games')
    @HttpCode(201)
    getQuizzes() {
        return Question.find()
    }
}