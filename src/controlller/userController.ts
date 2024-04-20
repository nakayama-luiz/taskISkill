import { Request, Response } from "express";
import { userRepository } from "../repository/userRepository"
import { taskRepository } from "../repository/taskRepository";
import { Equal } from "typeorm";

export class userController {

    async update(req: Request, res: Response){
        return res.json(await userRepository.save(req.body))
    }

    async create(req: Request, res: Response){

        return res.json(await userRepository.save(req.body)).status(201)

    }

    async delete(req: Request, res: Response){
        
        return res.json(await userRepository.delete({id: parseInt(req.params.id)}))
    }
    
    async findAll(req: Request, res: Response){
        console.log(await userRepository.find)

        
        return res.json(await userRepository.find())
    }
    
    async findById(req: Request, res: Response){
        const id = parseInt(req.params.id)
        const findedUser =  await userRepository.findOneBy({id})
        
        return res.json(findedUser).status(200)
    }

    async findTaskByUser(req: Request, res: Response){
        const userId = parseInt(req.params.id);
 
        const task = await taskRepository.find({where: {user: Equal(userId)}})  
        
        return res.json(task)
    }

}