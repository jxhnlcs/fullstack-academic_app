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

const insertUser = (name: string, username: string, password: string, email: string, callback: any) => {
  const insertUserQuery = `
    INSERT INTO Users (Name, Username, Password, Email)
    VALUES (?, ?, SHA2(?, 256), ?)
  `;

  db.query(insertUserQuery, [name, username, password, email], (err, result) => {
    if (err) {
      console.error('Erro ao cadastrar usuário na tabela Users:', err);
      return callback(err);
    }

    return callback(null);
  });
};

export { getUserByUsernameAndPassword, insertUser };