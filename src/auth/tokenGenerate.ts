import jwt, { SignOptions } from 'jsonwebtoken';
import { User } from '../types/user';

function generateToken(payload: User) {
  const secret: string = process.env.JWT_SECRET || 'secret';
  const tkn: SignOptions = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
  const token = jwt.sign(payload, secret, tkn);
  return token;
}

export default {
  generateToken,
};