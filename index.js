import "dotenv/config";
import express from 'express';
import cors from 'cors';

import productsRouter from './src/routers/products.router.js';
import authRouter from './src/routers/auth.router.js';
import bodyParser from "body-parser";
import { authentication } from "./src/middlewares/authentication.js";

const app = express();

// Enable CORS for all routes
app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.json({ message: "Bienvenidos a la API REST" });
});

app.use('/auth', authRouter);
app.use('/api', authentication, productsRouter);


app.use((req, res, next )=> { 
  res.status(404).json({error: "Not found"});   

});
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

export default app;

