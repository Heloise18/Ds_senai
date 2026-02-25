import express, { Request, Response, Router } from "express";
import { request } from "node:http";

const router: Router = express.Router();

interface aluno {
    id:number
    nome:string
    email:string
    tipo:"aluno" | "professor" | "coordenador"
    ativo:boolean
    createdAT:Date
}

const aluno: aluno[] = [];

router 
    .post('/register', (req: Request, res:Response) =>{
        const {id, nome, email, tipo, ativo} = req.body
        
        const createdAT = new Date()

        if(ativo == null){
            ativo == true;
        }

        if(nome == null || email == null){
            return res.status(500).send({response: "Campos obrigatórios estão vazios!"});
        }

        const IdExists = aluno.find((i) => i.id == id)
        
        if(IdExists){
            return res.status(500).send({ response: "Usuário já existe!" });
        }
        
        const EmailExists = aluno.find((e) => e.email == email)
        
        if(EmailExists){
            return res.status(500).send({ response: "Email já cadastrado!" });
        }
    
        aluno.push({id, nome, email, tipo, ativo, createdAT})
        return res.status(200).send({message:  `Usuario ${nome} cadastrado com sucesso` });
    })

    .get("/get", (req: Request, res: Response) => {
       return res.status(200).send({aluno: aluno});
    })

    .get("/get/filtro/:tipo", (req: Request, res: Response) => {
        const { tipo } = req.params;
        const people = aluno.filter((a) => a.tipo == tipo );
        // const 
        // if(tipo != ){
        //     return res.status(404).send({response: "Tipo não encontrado"});
        // }
        return res.status(200).send({response: people});
    })

    .get("/get/:id", (req: Request, res: Response) => {
        const { id } = req.params;
        let convertedID = Number(id)
        const AlunoExists = aluno.find((a) => a.id == convertedID);

        if(!AlunoExists){
            return res.status(404).send({ response: "Usuario não encontrado"})
        }
        return res.status(200).send({ aluno: AlunoExists})
    })

    .put("/atualizar/:id",  (req:Request, res:Response) => {
        const { id } = req.params
        const {  nome, email, tipo, ativo } = req.body

        let convertedID = Number(id)
    
        const alunoo = aluno.find((a) => a.id == convertedID)
        const emaill = aluno.find((a) => email == a.email)
        
        if(alunoo){
            if(alunoo?.email == email){
                return res.status(500).send({response: "Email não alterado!"})
            }

            if(!emaill){
                alunoo.nome = nome
                alunoo.email = email
                alunoo.tipo = tipo
                alunoo.ativo = ativo
                return res.status(200).send({response: `Atualizando usuario ${id} -> ${nome}`})
            }

            return res.status(500).send({ response: "Email já cadastrado!" }); 
        }
        return res.status(404).send({ response: "Error usuario inexistente" }); 

    })       
    
    
    .patch("/update/:id", (req:Request, res:Response) =>{
        const { id } = req.params
        const {  nome, email, tipo, ativo } = req.body
        
        let convertedID = Number(id)
        
        const alunoo = aluno.find((a) => a.id == convertedID )
        if(alunoo){
            
            if(nome != null){
                alunoo.nome = nome
            }

            if(email != null){
                alunoo.email = email
            }

            if(tipo != null){
                alunoo.tipo = tipo
            }

            if(ativo != null){
                alunoo.ativo = ativo
            }
            return res.status(200).send({ response: "Usuario atualizado!" });
            
        }else{
            return res.status(500).send({ response: "Usuario não encontrado" });

        }
    })

    .delete("/deletar/:id", (req:Request, res:Response) => {
        const { id } = req.params
        let convertedID = Number(id)
        const EXISTE = aluno.find((a) => a.id == convertedID )
        
        if(!EXISTE){
            return res.status(404).send({ response: "Usuario não encontrado" });
        }
        
        aluno.splice(convertedID - 1 ,1);
        console.log(aluno)
        return res.status(200).send({response: `Deletando usuario ${id}`});

    })




export default router;       

