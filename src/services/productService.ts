import { Product } from '../types/product';
import productModel from '../models/productModel';

const createNewProduct = async (name: string, amount: string): Promise<Product | undefined> => {
  const newProduct = await productModel.createProduct(name, amount);
  return newProduct;
};

const getAll = async () => {
  const products = await productModel.getAllProducts();
  return products;
};

export default {
  createNewProduct,
  getAll,
};