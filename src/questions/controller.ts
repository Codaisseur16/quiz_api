
import { Post, Param, HttpCode, Get, Body, Patch, JsonController, Delete, NotFoundError } from 'routing-controllers'
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

    @Patch('/questions/:id([0-9]+)')
    async updateQuestion(
        @Param('id') questionId: number,
        @Body() update//: QuestionsUpdate
    ) {
        console.log('At line1 Patch')

        let question = await Question.findOneById(questionId)

        console.log('At line2 Patch')

        question = update
        if(question)
        return question.save()
        else
        return 'error'
    }

    @Get('/questions')
    @HttpCode(201)
    getQuestion() {
        return Question.find()
    }

    @Get('/quizquestions/:id([0-9]+)')
    @HttpCode(201)
    getQuizQuestions(
        @Param('id') quizRequestId: number
    ) {
        console.log('youve made it here')
        let quizQuestion = Question.find( {quiz: quizRequestId} ) 

        return quizQuestion 
    }

    @Delete('/questions/:id')
    async deleteQuestion(
        @Param('id') id: number
    ) {
        const question = await Question.findOneById(id)

        if (!question) throw new NotFoundError('Question doesn\'t exist')

        if (question) Question.removeById(id)
        return 'successfully deleted'
    }
}