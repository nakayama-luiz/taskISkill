import { Request, Response } from "express";
import { TaskControlller } from "../controller/taskController";



export class ServicodeUsuario {

    async countTaskUser(req: Request, res: Response) {
        try {
            const espera = Number(req.query.id)
            const resultadoo2
                = await new TaskControlller().findTaskByUser(espera)
            console.log(resultadoo2
                .length)
            const count = resultadoo2
                .map((task, i) => {
                    return i + 1
                }
                )
            console.table(count)
            return res.status(200).json(count.length)
        } catch (error) {
            res.status(500).json('deu ruim')
        }

    }

    async taskUser(req: Request, res: Response) {
        try {
            const espera = Number(req.query.id)
            const resultadoo2
                = await new TaskControlller().findTaskByUser(espera)
            console.table(resultadoo2

            )
            return res.status(200).json(resultadoo2

            )
        } catch (error) {
            return res.status(500).json('deu ruim')
        }
    }

    async longerTask(req: Request, res: Response) {
        try {
            console.log('bateu')
            const espera = Number(req.query.id)
            const resultadoo2
                = await new TaskControlller().findTaskByUser(espera)

            const descriptionmjor = resultadoo2
                .reduce((taskmajor, task) => {
                    if (!taskmajor || task.description.length > taskmajor.description.length) {
                        return task;
                    } else {
                        return taskmajor;
                    }
                }, null);

            console.table(descriptionmjor);

            return res.status(200).json(descriptionmjor);
        } catch (error) {
            console.log(error)
            res.status(500).json('deu ruim');
        }
    }


    async OldesTask(req: Request, res: Response) {
        try {
            console.log('bateu');
            const espera = Number(req.query.id);
            const resultadoo2
                = await new TaskControlller().findTaskByUser(espera);

            const tarefaComDataMaisAntiga = resultadoo2
                .reduce((velhatask, task) => {
                    if (!velhatask || task.creationDate < velhatask.creationDate) {
                        return task;
                    } else {
                        return velhatask;
                    }
                }, null);

            console.log(tarefaComDataMaisAntiga);

            return res.status(200).json(tarefaComDataMaisAntiga);
        } catch (error) {
            console.log(error)
            res.status(500).json('deu ruim');
        }
    }


} 