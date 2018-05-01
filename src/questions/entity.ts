import { BaseEntity, PrimaryGeneratedColumn, Column, Entity } from 'typeorm'


@Entity()
export class Question extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: Number

  @Column('integer', {})
  questionnumber: Number

  @Column('integer', {})
  quizId: Number

  @Column('text', {})
  title: String

  @Column('text', {})
  option1: String

  @Column('text', {})
  option2: String

  @Column('text', {})
  option3: String

  @Column('text', {})
  option4: String

  @Column('integer', {})
  correctAnswer: Number

}