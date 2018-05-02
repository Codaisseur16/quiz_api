import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'


@Entity()
export class Quiz extends BaseEntity {

    @PrimaryGeneratedColumn()
    id?: Number

    @Column('text', { nullable: false })
    quizTitle: String

    @Column('integer', {default: 1, nullable: true})
    userId: Number

}

