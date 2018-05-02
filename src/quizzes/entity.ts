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

    // this is a relation, read more about them here:
    // http://typeorm.io/#/many-to-one-one-to-many-relations
    // @OneToMany(_ => Player, player => player.game, { eager: true })
    // players: Player[]
}

