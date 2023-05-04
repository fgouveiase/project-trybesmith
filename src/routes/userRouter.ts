import { Router } from 'express';
import userontroller from '../controllers/userController';

const userRouter = Router();

userRouter.post('/', userontroller.createUserNew);

export default userRouter;