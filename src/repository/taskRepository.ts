import { Tasks } from "../entity/Tasks";
import { AppDataSource } from "../data-source";


export const taskRepository = AppDataSource.getRepository(Tasks)