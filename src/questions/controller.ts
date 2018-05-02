<<<<<<< HEAD
import {
    JsonController, Authorized, CurrentUser, Post, Param, BadRequestError, HttpCode, NotFoundError, ForbiddenError, Get,
    Body, Patch
} from 'routing-controllers'
import {Question} from './entity'
=======

import { Post, Param, HttpCode, Get, Body, Patch, JsonController } from 'routing-controllers'
import { Question } from './entity'
>>>>>>> 29880c8ee8ba951c4274a12cc9fb660a5641214c

@JsonController()
export default class QuestionController {
    @Post('/questions')
<<<<<<< HEAD
    //@HttpCode(201)
    async createQuiz(
        //@CurrentUser() user: User
    ) {
      console.log("Post request")
        //const entity = await Question.create().Save()

        //return entity
    }

=======
    // @HttpCode(201)
   async createQuiz(
        @Body() question: Question
    ) {
        const entity = await question.save()

        return { entity }
    }

    //should line 9 be createQuestion? 

>>>>>>> 29880c8ee8ba951c4274a12cc9fb660a5641214c
    @Patch('/questions/:id([0-9]+)')
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

    @Get('/questions')
<<<<<<< HEAD
    //@HttpCode(201)
=======
    @HttpCode(201)
>>>>>>> 29880c8ee8ba951c4274a12cc9fb660a5641214c
    getQuizzes() {
        console.log("Get request for quizzes")
        //return Question.find()
    }
}
