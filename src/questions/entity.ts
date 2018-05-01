import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, Index, OneToMany, ManyToOne } from 'typeorm'


@Entity()
export class Question extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column('integer', {})
  questionnumber: number

  @Column('integer', {})
  quizId: number

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

  @Column('number', {})
  correctAnswer: number

}
