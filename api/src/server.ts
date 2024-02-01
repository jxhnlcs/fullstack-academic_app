import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import consultaRouter from './routes/consultasRoute';

const app: Application = express();

app.use(express.json());
app.use(cors({ origin: '*' }));

app.use(consultaRouter);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).json({ error: 'Erro interno do servidor' });
});

const port: number = 3333;
app.listen(port, () => {
  console.log(`API rodando com sucesso em HTTPS na porta ${port}!`);
});