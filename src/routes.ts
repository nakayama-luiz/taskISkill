import { Router } from "express";
import {userController} from "./controller/userController"
import {TaskControlller} from "./controller/taskController"
import { ServicodeUsuario } from "./service/user.service";
import { ServicoDeTarefa } from "./service/taks.service";

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


routes.get('/get/filter/categoria', new ServicoDeTarefa().filterCategoria)
routes.get('/get/filter/categoria', new ServicoDeTarefa().filterStatus)
routes.get('/get/avg/task/complete', new ServicoDeTarefa().avgTaskcomplete)
routes.get('/get/filter/User-task-count', new ServicodeUsuario().countTaskUser)
routes.get('/get/filter/User-task-count', new ServicodeUsuario().countTaskUser)
routes.get('/get/filter/User/task/longer', new ServicodeUsuario().longerTask)
routes.get('/get/filter/User/task/oldest', new ServicodeUsuario().OldesTask)


routes.get('/get/alltask', new ServicoDeTarefa().findmany)





export default routes