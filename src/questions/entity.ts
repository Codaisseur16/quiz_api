import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, ManyToOne } from 'typeorm'
import { Quiz } from '../quizzes/entity'


@Entity()
export class Question extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column('integer', { nullable: true })
  questionNumber: number

  @ManyToOne(_ => Quiz, quiz => quiz.questions)
  quiz: number

  @Column('text', { nullable: true })
  title: string

  @Column('text', { nullable: true })
  option1: string

  @Column('text', { nullable: true })
  option2: string

  @Column('text', { nullable: true })
  option3: string

  @Column('text', { nullable: true })
  option4: string

  @Column('integer', { nullable: true })
  correctAnswer: number

}