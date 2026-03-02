import {  Request, Response} from "express";
import Person from "../models/Person.ts";


class PersonController {

    static async postUser(req: Request, res: Response){
    
        const {name,lastname, age} = req.body
        const person = new Person({name, lastname, age})

        try {
            await person.save()
            return res.status(200).send({message:  `Usuario ${name} cadastrado com sucesso` });
            
        } catch (error) {
            return res.status(500).send({response:"Erro", error}); 
        }

    }

    static async getUsers(req: Request, res: Response){
         try {
            const people = await Person.find();
            res.status(200).send(people);
        } catch (error) {
            res.status(400).send({ message: 'Erro ao buscar pessoas', error });
        }

    }

    static async putUSer(req: Request, res: Response){
        const { id } = req.params;
        const { name, lastname, age } = req.body;

        try {  
            const person = await Person.findByIdAndUpdate(id , {name, lastname, age})

            if(!person){
                res.status(404).send({ message: 'Pessoa não encontrada' });
            }
            res.status(200).send(person)
        
        } catch (error) {
            res.status(400).send({ message:'Erro ao atualizar pessoa', error })
        }
    }

    static async deleteUser(req: Request, res: Response){
        const { id } = req.params
       
        try {
            const person = await Person.findByIdAndDelete(id);
            
            if (!person) {
                res.status(404).send({ message: 'Pessoa não encontrada' });
            }
            res.status(200).send({ message: 'Pessoa deletada com sucesso' });

        } catch (error) {
            res.status(400).send({ message: 'Erro ao deletar pessoa', error });
        }

    }
    
}

export default PersonController