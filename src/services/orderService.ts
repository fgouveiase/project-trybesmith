import { Order } from '../types/order';
import orderModel from '../models/orderModel';

const getOrders = async (): Promise<Order[]> => {
  const allOrders = await orderModel.getOrders();
  return allOrders;
};

export default {
  getOrders,
};