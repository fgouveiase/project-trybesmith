import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { Product } from '../types/product';

const createProduct = async (name: string, amount: string): Promise<Product> => {
  const [{ insertId: id }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
    [name, amount],
  );

  const newProduct = { id, name, amount };
  return newProduct;
};

const getAllProducts = async (): Promise<Product[]> => {
  const [products] = await connection.execute('SELECT * FROM Trybesmith.products');
  return products as Product[];
};

export default {
  createProduct,
  getAllProducts,
};