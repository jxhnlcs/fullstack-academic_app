import { Request, Response } from 'express';
import { getAllUsers } from '../models/userModel';


const getAllUsersController = (req: Request, res: Response) => {
  getAllUsers((err: Error, result: any | null) => {
    if (err) {
      console.error('Erro ao obter todos os usuários:', err);
      return res.status(500).json({ message: 'Erro interno do servidor' });
    }

    return res.status(200).json(result);
  });
};

export { getAllUsersController };