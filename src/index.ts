import { AppDataSource } from "./data-source"
import { Tasks } from "./entity/Tasks"
import { User } from "./entity/User"
import * as express from "express"
import routes from "./routes"

AppDataSource.initialize().then(async () => {

    const app =express() 
    app.use(express.json())
    app.use(routes)

    console.log("Inserting a new user into the database...")
    const user = new User()
    user.name = "Timber"
    user.senha = "Saw"
    user.email = "pog"
 await AppDataSource.manager.save(user)
    const users = await AppDataSource.manager.find(User)

    const task = new Tasks()

    task.title = "comrpas"
    task.user = users.at(20)
    task.description = "compras coisas"


    await AppDataSource.manager.save(task)
    
   
    console.log("Saved a new user with id: " + user.id)

    console.log("Loading users from the database...")
//    const users = await AppDataSource.manager.find(User)
  //  console.log("Loaded users: ", users)

    console.log("Here you can setup and run express / fastify / any other framework.")

    app.listen(3000)

}).catch(error => console.log(error))
