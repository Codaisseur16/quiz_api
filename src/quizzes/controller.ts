<<<<<<< HEAD
import {
    JsonController, Authorized, CurrentUser, Post, Param, BadRequestError, HttpCode, NotFoundError, ForbiddenError, Get,
    Body, Patch
} from 'routing-controllers'
import {Quiz} from './entity'
=======
import { Post, Param, HttpCode, Get, Body, Patch, JsonController } from 'routing-controllers'
import { Quiz } from './entity'
>>>>>>> 29880c8ee8ba951c4274a12cc9fb660a5641214c

@JsonController()
export default class QuizController {
    @Post('/quizzes')
    //@HttpCode(201)
    async createQuiz(
        @Body() quiz: Quiz
    ) {
<<<<<<< HEAD
    console.log("Post request")
        //const entity = await Quiz.create().Save()

        //return entity
    }

=======
        const entity = await quiz.save()

        return { entity }
    }

    //look at the questions controller @post to see what changes charize made to make this one work

>>>>>>> 29880c8ee8ba951c4274a12cc9fb660a5641214c
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
<<<<<<< HEAD
    //@HttpCode(201)
=======
    @HttpCode(201)
>>>>>>> 29880c8ee8ba951c4274a12cc9fb660a5641214c
    getQuizzes(){
      console.log("Quiz get request")
        //return Quiz.find()
    }
}
