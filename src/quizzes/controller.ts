import {
    JsonController, Authorized, CurrentUser, Post, Param, BadRequestError, HttpCode, NotFoundError, ForbiddenError, Get,
    Body, Patch
} from 'routing-controllers'
import {Quiz} from './entity'

export default class QuizController {
    @Post('/quizzes')
    //@HttpCode(201)
    async createQuiz(
        //@CurrentUser() user: User
    ) {
    console.log("Post request")
        //const entity = await Quiz.create().Save()

        //return entity
    }

    @Patch('/quizzes/:id([0-9]+)')
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

    @Get('/quizzes')
    //@HttpCode(201)
    getQuizzes(){
      console.log("Quiz get request")
        //return Quiz.find()
    }
}
