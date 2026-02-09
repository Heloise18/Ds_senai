import express, { response } from  'express';
import routes from './routes/routes.ts'

const port = 8011;
const app = express()

routes (app)

app.get('/', (req,res)=> {
    res.status(200).send({response: "EBBAAA"})
})

app.listen(port, () => {
    console.log(` Servidor rodando na portra ${port}`);
})
