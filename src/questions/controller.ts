
import { Post, Param, HttpCode, Get, Body, Patch, JsonController } from 'routing-controllers'
import { Question } from './entity'

@JsonController()
export default class QuestionController {
    @Post('/questions')
    // @HttpCode(201)
   async createQuestion(
        @Body() question: Question
    ) {
        const entity = await question.save()

        return { entity }
    }

    //should line 9 be createQuestion?????

    @Patch('/questions/:id([0-9]+)')
    async updateQuestion(
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
    @HttpCode(201)
    getQuestion() {
        return Question.find()
    }
}