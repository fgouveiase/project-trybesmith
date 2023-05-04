import { Request, Response } from 'express';
import userService from '../services/userService';

async function createUserNew(req: Request, res: Response) {
  const newUser = await userService.createNewUser(req.body);
  res.status(201).json({ token: newUser });
}

export default {
  createUserNew,
};