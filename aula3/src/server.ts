import express, { response } from  'express';

const port = 8011;
const app = express()


app.listen(port, () => {
    console.log(` Servidor rodando na portra ${port}`);
})
