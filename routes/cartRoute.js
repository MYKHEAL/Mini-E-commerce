import express from 'express';
import {addToCart, getCartItem} from '../controller/cartController.js';
const router = express.Router();

router.post('/add', addToCart);
router.get('/:userId', getCartItem);

export default router;