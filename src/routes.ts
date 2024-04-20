import { Router } from "express";
import {userController} from "./controlller/userController"
import {TaskControlller} from "./controlller/taskController"

const user = new userController()
const task = new TaskControlller()
const routes = Router()

routes.get('/compras', user.findAll)
routes.get('/user/:id', user.findById)
routes.get('/user/task/:id', user.findTaskByUser)
routes.post('/user', user.create)
routes.delete('/user/:id', user.delete)
routes.put('/user', user.update)
routes.post('/task', task.create)
routes.get('/task/:id', task.findTaskById)
routes.get('/task/user/:id', task.findTaskByUser)
routes.delete('/task/:id', task.delete)
routes.put('/task', task.update)

export default routes