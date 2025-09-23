import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { amount } = body;

    if (typeof amount !== "number" || amount <= 0) {
      return NextResponse.json(
        { message: "Valid amount is required" },
        { status: 400 }
      );
    }

    const key_id = process.env.RAZORPAY_KEY_ID;
    const key_secret = process.env.RAZORPAY_KEY_SECRET;

    if (!key_id || !key_secret) {
      console.error("Missing Razorpay credentials in environment variables.");
      return NextResponse.json(
        { message: "Server misconfiguration. Please contact support." },
        { status: 500 }
      );
    }

    const razorpay = new Razorpay({
      key_id,
      key_secret,
    });

    const order = await razorpay.orders.create({
      amount, // amount in paise
      currency: "INR",
      receipt: `receipt_order_${Math.floor(Math.random() * 1000000)}`,
      payment_capture: true,
    });

    return NextResponse.json(order);
  } catch (error: any) {
    console.error("Error creating Razorpay order:", error);
    return NextResponse.json(
      {
        message: "Failed to create Razorpay order",
        error: error.message || "Unknown error",
      },
      { status: 500 }
    );
  }
}