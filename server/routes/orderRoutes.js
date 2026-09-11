import express from 'express';
import Order from '../models/Order.js';

const router = express.Router();

// @route   POST /api/orders
// @desc    Create new order
router.post('/', async (req, res) => {
  try {
    const order = await Order.create(req.body);
    res.status(201).json({ success: true, data: order });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// @route   GET /api/orders
// @desc    Fetch all orders
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json({ success: true, count: orders.length, data: orders });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
