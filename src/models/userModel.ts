import { ResultSetHeader } from 'mysql2';
import { User } from '../types/user';
import connection from './connection';

const createUser = async (user: User): Promise<User> => {
  const { username, vocation, level, password } = user;
  const [{ insertId: id }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
    [username, vocation, level, password],
  );

  const newUser = { id, username, vocation, level, password };
  return newUser; 
};

export default {
  createUser,
};