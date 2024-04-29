import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Tasks } from "./entity/Tasks"
import { Categoria } from "./entity/Categoria"

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "banco.sqlite",
    synchronize: true,
    logging: false,
    entities: [User, Tasks, Categoria],
    migrations: [],
    subscribers: [],
})
