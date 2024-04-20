import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { User } from "./User"

type TaskStatus = 'pendente' | 'em andamento' | 'concluída';

@Entity()
export class Tasks {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    title: string

    @Column()
    description: string

    @Column({ default: () => 'CURRENT_TIMESTAMP' })
    creationDate: Date 

    @Column({nullable: true})
    conclusionDate: Date

    @ManyToOne(()=> User, (user)=> user.tasks)
    user: User
    
    @Column({ default: 'pendente' })
    Status: TaskStatus

}