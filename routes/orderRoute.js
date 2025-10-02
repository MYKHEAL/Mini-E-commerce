import express from 'express';
import { createOrder, getOrders } from '../controller/orderController';
const router = express.Router();


router.post('/create', createOrder);
router.get('/user/:userId', getOrders);

export default router;