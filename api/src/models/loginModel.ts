import { db } from '../models/db';

const getUserByUsernameAndPassword = (username: string, password: string, callback: any) => {
  const userQuery = `
    SELECT * 
    FROM Users
    WHERE Username = ? AND Password = SHA2(?, 256)
  `;

  db.query(userQuery, [username, password], (err, userData) => {
    if (err) {
      console.error('Erro ao consultar usuário por nome de usuário e senha:', err);
      return callback(err, null);
    }

    return callback(null, userData);
  });
};

const insertUser = (
  name: string,
  username: string,
  password: string,
  email: string,
  telefone: string,
  cep: string,
  cpf: string,
  nascimento: string,
  documento: Buffer, // Alterado o tipo para Buffer para armazenar a imagem/documento
  callback: (err: Error | null) => void
) => {
  const insertUserQuery = `
    INSERT INTO Users (Name, Username, Password, Email, Telefone, CEP, CPF, Nascimento, Documento)
    VALUES (?, ?, SHA2(?, 256), ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    insertUserQuery,
    [name, username, password, email, telefone, cep, cpf, nascimento, documento],
    (err) => {
      if (err) {
        console.error('Erro ao cadastrar usuário na tabela Users:', err);
        return callback(err);
      }

      return callback(null);
    }
  );
};

export { getUserByUsernameAndPassword, insertUser };