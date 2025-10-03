import express from 'express';
import {addToCart, getCartItems} from '../controller/cartController.js';
const router = express.Router();

router.post('/add', addToCart);
router.get('/:userId', getCartItems);

export default router;