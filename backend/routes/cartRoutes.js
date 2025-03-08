import express from 'express';
import { auth } from '../middleware/auth.js';
import {
  addToCart,
  removeFromCart,
  getCart,
  clearCart,
} from '../controllers/cartController.js';

const router = express.Router();

router.post('/add', auth, addToCart);
router.post('/remove', auth, removeFromCart);
router.get('/', auth, getCart);
router.post('/clear', auth, clearCart);

export default router;
