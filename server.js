import express from 'express';
import dotenv from 'dotenv';
import connectDb from './config/db.js';


dotenv.config();
const app = express();
app.use(express.json());

connectDb();

app.get('/', (req, res) =>{

res.send("E-commerce API is running...");
});

//Routes
import userRoutes from './routes/userRoutes.js';
import productRoutes from './routes/productRoute.js';
import cartRoutes from './routes/cartRoute.js';
import orderRoutes from './routes/orderRoute.js';

const PORT = process.env.PORT || 5000;
app.listen (PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});