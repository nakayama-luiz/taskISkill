import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm"
import { User } from "./User"
import { Categoria } from "./Categoria";

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

    @ManyToOne(() => Categoria, categoria => categoria.id, { nullable: true } )
    @JoinColumn({name:'categoria_id'})//opcional //TALVEZ tenha que ligar com categoria
    categoria:Categoria

}