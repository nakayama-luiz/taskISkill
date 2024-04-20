import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Tasks } from "./Tasks"

@Entity()
export class User {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    name: string

    @Column()
    senha: string

    @Column()
    email: string
  
    @OneToMany(()=> Tasks, (task)=> task.user, {nullable:true})
    tasks: Tasks[]


}
