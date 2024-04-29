import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Tasks } from "./Tasks"
import { Categoria } from "./Categoria"

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

    @OneToMany(()=> Categoria, categoria => categoria.User)
    categorias:Categoria[]


}
