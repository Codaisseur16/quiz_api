import 'reflect-metadata'
import {createKoaServer} from "routing-controllers"
import setupDb from './db'
import QuestionController from './questions/controller'
import QuizController from './quizzes/controller'

const port = process.env.PORT || 4008

const app = createKoaServer({
  controllers: [
    QuizController,
    QuestionController
  ]
})

setupDb()
  .then(_ => {
    app.listen(port, () => console.log(`Listening on port ${port}`))
  })
  .catch(err => console.error(err))
