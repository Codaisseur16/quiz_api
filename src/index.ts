import 'reflect-metadata'
import {createKoaServer} from "routing-controllers"
import setupDb from './db'
import QuestionController from './questions/controller'
import QuizController from './quizzes/controller'
import * as Koa from 'koa'

const port = process.env.PORT || 4008

const app = new Koa()

useKoaServer(app, {
  cors: true,
  controllers: [
    QuizController,
    QuestionController
  ]
})

// const app = createKoaServer({
//   controllers: [
//     QuizController,
//     QuestionController
//   ]
// })

setupDb()
  .then(_ => {
    app.listen(port, () => console.log(`Listening on port ${port}`))
  })
  .catch(err => console.error(err))
