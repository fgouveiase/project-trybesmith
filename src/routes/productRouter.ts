import { Router } from 'express';
import productController from '../controllers/productController';

const productRouter = Router();

productRouter.post('/products', productController.productCreate);
productRouter.get('/products', productController.getListProducts);

export default productRouter;