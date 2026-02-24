import express from 'express';

const app = express();
const port = 8011;

app.listen(port, () => console.log(`Acesse: http://localhost:${port}/`));
