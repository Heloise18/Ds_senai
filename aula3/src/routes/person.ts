import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();
const people: object[] = [];


router
    .post('/register', (req: Request , res: Response) => {
        const { name, idade} = req.body
        people.push({name, idade})
        res.status(200).send({ message: `Usuario ${name} cadastrado com sucesso`  })

    })

export default router;