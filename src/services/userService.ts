import { User } from '../types/user';
import userModel from '../models/userModel';
import tokenGenerate from '../auth/tokenGenerate';

const createNewUser = async (user: User): Promise<string> => {
  const newUser = await userModel.createUser(user);
  const token = tokenGenerate.generateToken(newUser);
  return token;
};

export default {
  createNewUser,
};