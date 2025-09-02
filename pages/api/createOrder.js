// pages/api/createOrder.js

import Razorpay from 'razorpay';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });

  const options = {
    amount: 200000, // ₹2000 in paise
    currency: 'INR',
    receipt: 'receipt_order_2000',
  };

  try {
    const order = await razorpay.orders.create(options);
    return res.status(200).json(order);
  } catch (error) {
    console.error('Razorpay order creation error:', error);
    return res.status(500).json({ message: 'Failed to create payment order' });
  }
}

