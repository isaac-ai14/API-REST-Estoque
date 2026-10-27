
 // Isaac Shabir

import express from 'express';
import materialsRouter from './routes/materials.js';

const app = express();
const port = 3002;

app.use(express.json());

app.use('/materials', materialsRouter);

app.listen(port, () => {
  console.log(`Servidor executando na porta ${port}`);
});
