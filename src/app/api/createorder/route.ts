// File: src/app/api/createOrder/route.ts

import { NextRequest, NextResponse } from 'next/server';
import Razorpay from 'razorpay';

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { amount } = body;

    if (typeof amount !== 'number' || amount <= 0) {
      return NextResponse.json({ message: 'Valid amount is required' }, { status: 400 });
    }

    const order = await razorpay.orders.create({
      amount, // amount in paisa (e.g. 2000 = ₹20)
      currency: 'INR',
      receipt: `receipt_order_${Math.floor(Math.random() * 1000000)}`,
      payment_capture: true, // ✅ FIX: changed from 1 to true
    });

    return NextResponse.json(order);
  } catch (error: any) {
    console.error('Error creating Razorpay order:', error);
    return NextResponse.json(
      { message: 'Failed to create Razorpay order', error: error.message },
      { status: 500 }
    );
  }
}
