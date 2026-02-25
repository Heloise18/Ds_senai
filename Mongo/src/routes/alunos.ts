import express, { Request, Response, Router } from "express";
import { request } from "node:http";
import Person from '../models/Person.ts'


const router: Router = express.Router();




router 
    .post("/register", async (req:Request, res:Response) =>{
        const {name, lastname, age} = req.body
        const person = new Person({name, lastname, age})
        
        await person.save()
        res.status(200).send("Registrado com sucesso!")
    })


export default router;       

