import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { getUserByUsernameAndPassword, insertUser } from '../models/loginModel';

const secretKey: string = 'sua_chave_secreta';

const fazerLogin = (req: Request, res: Response) => {
  const { Username, Password } = req.body;

  getUserByUsernameAndPassword(Username, Password, (err: any, userData: any) => {
    if (err) {
      return res.status(500).json({ message: 'Erro interno do servidor' });
    }

    if (Array.isArray(userData) && userData.length === 1) {
      const { UserID, Username, Name } = userData[0];

      const userInfo = {
        userid: UserID,
        user: Username,
        name: Name,
      };

      const token = jwt.sign(userInfo, secretKey, { expiresIn: '5h' });

      return res.status(200).json({ authenticated: true, token });
    } else {
      return res.status(401).json({ authenticated: false, message: 'Credenciais inválidas' });
    }
  });
};

const cadastrarUsuario = (req: Request, res: Response) => {
  const { Name, Username, Password, Email } = req.body;

  insertUser(Name, Username, Password, Email, (err: any) => {
    if (err) {
      return res.status(500).json({ message: 'Erro interno do servidor' });
    }

    return res.status(201).json({ message: 'Usuário cadastrado com sucesso' });
  });
};

export { fazerLogin, cadastrarUsuario };