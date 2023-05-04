import { Order } from '../types/order';
import connection from './connection';

const getOrders = async (): Promise<Order[]> => {
  const [orders] = await connection.execute(
    `SELECT orders.id as id, orders.user_id as userId, JSON_ARRAYAGG(products.id) as productsIds 
    FROM Trybesmith.orders AS orders
    INNER JOIN Trybesmith.products AS products ON orders.id = products.order_id
    GROUP BY orders.id`,
  );
  return orders as Order[];
};

export default {
  getOrders,
};