
import { Post, Param, HttpCode, Get, Body, Patch, JsonController } from 'routing-controllers'
import { Question } from './entity'

// might not need to get all questions and get all questions by id

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

        await question.save()
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
}