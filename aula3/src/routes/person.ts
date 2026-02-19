import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();
const people: object[] = [];


router
    .post('/register', (req: Request , res: Response) => {
        const { name, idade} = req.body
        people.push({name, idade})
        res.status(200).send({ message: `Usuario ${name} cadastrado com sucesso`  })

    })


    .get("/user", (req: Request, res: Response) => {

        res.status(200).send({user: people})
    })

    .get("/user/:id", (req:Request, res:Response) => {
        const { id } = req.params
        let convertedID = Number(id)
        res.status(200).send({response: people[convertedID]})

    })


    
export default router;