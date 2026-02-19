import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();
const people: object[] = [];


router
    .post('/register', (req: Request , res: Response) => {
        const {id, name, idade} = req.body
        people.push({id, name, idade})
        res.status(200).send({ message: `Usuario ${name} cadastrado com sucesso`  })

    })


    .get("/user", (req: Request, res: Response) => {

        res.status(200).send({user: people})
    })

    // .get("/user/:id", (req:Request, res:Response) => {
    //     const { id } = req.params
    //     let convertedID = Number(id)
    //     res.status(200).send({response: people[convertedID]})

    // })

    .get("/filtro", (req:Request, res:Response) => {
        const {id, name, idade } = req.query
        res.status(200).send({response:id, name, idade})

    })

    .put("/atualizar/:id",  (req:Request, res:Response) => {
        const { id } = req.params
        const { name, idade } = req.body
        res.status(200).send({response: `Atualizando usuario ${id} -> ${name} - ${idade}`})

    })                          

    
    .delete("/deletar/:id", (req:Request, res:Response) => {
        const { id } = req.params
        res.status(200).send({response: `Deletando usuario ${id}`})

    })



export default router;