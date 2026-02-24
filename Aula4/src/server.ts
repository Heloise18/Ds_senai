import express from 'express';
import routes from './routes/routes.ts';

const app = express();
const port = 8011;
routes(app);

app.listen(port, () => console.log(`Acesse: http://localhost:${port}/`));
