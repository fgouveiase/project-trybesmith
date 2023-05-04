import { Request, Response } from 'express';
import orderService from '../services/orderService';

const getOrders = async (req: Request, res: Response) => {
  const allOrders = await orderService.getOrders();
  return res.status(200).json(allOrders);
};

export default {
  getOrders,
};