import { Request, Response } from 'express';
import productService from '../services/productService';

const productCreate = async (req: Request, res: Response) => {
  const { name, amount } = req.body;
  const newProd = await productService.createNewProduct(name, amount);
  return res.status(201).json(newProd);   
};

const getListProducts = async (req: Request, res: Response) => {
  const products = await productService.getAll();
  return res.status(200).json(products);
};

export default {
  productCreate,
  getListProducts,
};