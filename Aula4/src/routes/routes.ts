import { Express } from 'express';
import express from 'express'
import aluno from './alunos.ts'

export default function (app: Express) {
app.use(express.json())
.use("/api", aluno) 

}