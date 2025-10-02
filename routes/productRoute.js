import express from 'express';
import { createProduct,  getAllProducts} from '../controller/productController';
const router = express.Router();

router.post('/create', createProduct);
router.get('/all', getAllProducts);

export default router;