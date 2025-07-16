import express from 'express';

const router = express.Router();

import { getAllProducts, getProductById, saveProduct, deleteProduct, updateProduct } from  '../controllers/products.controller.js';
import { authentication } from '../middlewares/authentication.js';


router.use(express.json());

router.get('/products',authentication, getAllProducts);

router.get('/products/:id', authentication,getProductById);

router.post('/products/create', authentication ,saveProduct);

router.delete('/products/:id',authentication, deleteProduct);

router.put('/products/:id', authentication, updateProduct);



export default router;