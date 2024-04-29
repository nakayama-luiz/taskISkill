import { Equal } from "typeorm";
import { taskRepository } from "../repository/taskRepository";
import { Response, Request } from "express";


export class TaskControlller{

    async create(req: Request, res: Response){
        return res.json(await taskRepository.save(req.body))
    }

    async findTaskById(req: Request, res: Response){
        return res.json(await taskRepository.findOneBy({id: parseInt(req.params.id)}))
    }
    
    async findMany(){
        return await taskRepository.find()
    }


    async findTaskByUser(req: any){
        // const userId = parseInt(req.params.id);
        const task = await taskRepository.find({where: {user: Equal(req)}})  
        
        return (task)
    }

    async delete(req: Request, res: Response){
        return res.json(await taskRepository.delete({id: parseInt(req.params.id)}))
    }

    async update(req: Request, res: Response){
        return res.json(await taskRepository.save(req.body))
    }

}
