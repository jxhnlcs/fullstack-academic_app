import { db } from '../models/db';

const getAllUsers = (callback: any) => {
  const getAllUsersQuery = `
    SELECT * FROM Users
  `;

  db.query(getAllUsersQuery, (err, result) => {
    if (err) {
      return callback(err, null);
    }

    return callback(null, result);
  });
};

export { getAllUsers };
