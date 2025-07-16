import "dotenv/config";
import express from 'express';

import productsRouter from './src/routers/products.router.js';
import authRouter from './src/routers/auth.router.js';
import bodyParser from "body-parser";
import { authentication } from "./src/middlewares/authentication.js";

const app = express();
app.use(express.json());

app.use('/auth', authRouter);
app.use('/api', authentication, productsRouter);


app.use((req, res, next )=> { 
  res.status(404).json({error: "Not found"});   

});
const PORT = process.env.PORT || 3000;  

app.listen(PORT, ()=> console.log(`http://localhost:${PORT}`));

