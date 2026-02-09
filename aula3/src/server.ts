import express, { response } from  'express';

const port = 8011;
const app = express()

app.listen(port);

const pessoas = [
    {
    name: "Helo",
    Lastname: "Fachinello",
    idade: "17.10"
    },
    {
    name: "Cr",
    Lastname: "Cardoso",
    idade: "18"

    }
    
]

app.get('/', (req, res) => {
    res.send({ response: "Api funegando! "})
}); 

app.get('/pessoa', (req, res) => {
    // res.send({ people: pessoas})
    res.status(200).send({pessoas})
}); 


// app.get('/direto', (req, res) => {
//     res.send({ pessoa})
// }); 

app.listen(port, () => {
    console.log(` Servidor rodando na portra ${port}`);
})
