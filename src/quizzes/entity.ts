import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { Question } from '../questions/entity'

@Entity()
export class Quiz extends BaseEntity {

    @PrimaryGeneratedColumn()
    id?: number

    @Column('text', { nullable: false })
    quizTitle: String

    @Column('integer', {default: 1, nullable: true})
    userId: number

    // this is a relation, read more about them here:
    // http://typeorm.io/#/many-to-one-one-to-many-relations
    @OneToMany(_ => Question, question => question.quiz, { eager: true })
    questions: Question[]
}

