import { Request, response, Response } from "express";
import { TaskControlller } from "../controller/taskController";
import { TaskStatus } from "../entity/TaskStatus";



export class ServicoDeTarefa {

    async filterCategoria(req: Request, res: Response) {
        try {
            const resultado = req.query.categoria
            const espera = await new TaskControlller().findMany()
            const filter2 = espera.filter((task) => task.categoria && task.categoria.name === resultado)
            return res.status(200).json(filter2)
        } catch {
            return res.status(500).json({ message: 'Erro ao buscar tarefas.' });

        }
    }

    async findmany(req: Request, res: Response) {
        try {

            const entrega = await new TaskControlller().findMany()
            return res.status(200).json(entrega)
        } catch {
            return res.status(500).json({ message: 'Erro ao buscar tarefas.' });

        }
    }

    async filterStatus(req: Request, res: Response) {
        try {
            const resultado = req.query.status

            const espera = await new TaskControlller().findMany()
            const resultado2 = espera.filter((task) => task.Status && task.Status === resultado)
            return res.status(200).json(resultado2)
        } catch {
            return res.status(500).json({ message: 'Erro ao buscar tarefas.' }); 
        }
    }

    async filterConcluido(req: Request, res: Response) {
        try {
            const datafinal = Number(req.query.dataClose)

            const datacomço = Number(req.query.dataStart)

            const espera = await new TaskControlller().findMany()
            const resultado2 = espera.filter((task) => (task.conclusionDate && Number(task.conclusionDate) < datafinal) && (task.creationDate && Number(task.creationDate) > datacomço))
            return res.status(200).json(resultado2)
        } catch (error){
            return res.status(500).json(error); 

        }
    }

    async avgTaskcomplete(req: Request, res: Response) {
        try {
            const all = await new TaskControlller().findMany()
            const complete = all.filter(task => task.Status === 'concluída');

            return res.status(200).json((complete.length/all.length))


        } catch (error) {
            res.status(500).json('falied')
        }

    }





}