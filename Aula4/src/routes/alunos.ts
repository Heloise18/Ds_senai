import express, { Request, Response, Router } from "express";

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

    .get("/aluno", (req: Request, res: Response) => {
       return res.status(200).send({aluno: aluno});
    })

    .get("/aluno/filtro/:tipo", (req: Request, res: Response) => {
        const { tipo } = req.params;
        const people = aluno.filter((a) => a.tipo == tipo );
        return res.status(200).send({response: people});
    })

    .get("/aluno/:id", (req: Request, res: Response) => {
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
        const alunoo = aluno.find((a) => a.email == email )
        if(alunoo){
            alunoo.nome = nome
            alunoo.email = email
            alunoo.tipo = tipo
            alunoo.ativo = ativo
            return res.status(200).send({response: `Atualizando usuario ${id} -> ${nome}`})
        }else{
            
            return res.status(500).send({ response: "Email já cadastrado!" });
        }
        



    })       


    .delete("/deletar/:id", (req:Request, res:Response) => {
        const { id } = req.params
        let convertedID = Number(id)
        const EXISTE = aluno.find((a) => a.id == convertedID )
        
        if(!EXISTE){
            return res.status(404).send({ response: "Usuario não encontrado" });
        }

        return res.status(200).send({response: `Deletando usuario ${id}`})

    })




export default router;       

