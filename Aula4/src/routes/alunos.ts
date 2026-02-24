import express, { Request, Response, Router } from "express";

const router: Router = express.Router();

interface aluno {
    id:number;
    nome:string;
    email:string;
    tipo:"aluno";
    ativo:boolean;
    createdAT:Date;
}

const aluno: aluno[] = [];