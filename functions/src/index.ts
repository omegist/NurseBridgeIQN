import { onUserCreate } from "firebase-functions/v2/auth";
import type { UserRecord } from "firebase-admin/auth";
import { logger } from "firebase-functions/v2";
import nodemailer from "nodemailer";

import * as functions from "firebase-functions";
import Razorpay from "razorpay";
import express, { Request, Response } from "express";
import cors from "cors";

// 🔧 Firebase Config
const config = functions.config();

// ✅ Email Transport Setup
const mailTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: config.gmail.email,
    pass: config.gmail.password,
  },
});

const ADMIN_EMAIL = config.admin.email;

// ✅ User Signup Email Notification
export const sendNewUserEmail = onUserCreate(
  async (event: { data: UserRecord | undefined }) => {
    const user = event.data;
    if (!user) {
      logger.error("No user data found in event.");
      return;
    }

    const email = user.email;
    const displayName = user.displayName || "No name provided";

    if (!email || !ADMIN_EMAIL) {
      logger.error("User email or admin email is not defined. Cannot send email.");
      return;
    }

    const mailOptions = {
      from: `"Nurse IQN App" <${config.gmail.email}>`,
      to: ADMIN_EMAIL,
      subject: "🎉 New User Signup on Nurse IQN!",
      html: `
        <h1>New User Alert!</h1>
        <p>A new user has just signed up for your application.</p>
        <p><b>Name:</b> ${displayName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>UID:</b> ${user.uid}</p>
        <p><b>Signup Date:</b> ${new Date(user.metadata.creationTime).toLocaleString()}</p>
        <p>You can view all users in your Firebase Console.</p>
      `,
    };

    try {
      await mailTransport.sendMail(mailOptions);
      logger.log(`New user notification email sent to ${ADMIN_EMAIL}`);
    } catch (error) {
      logger.error("There was an error while sending the email:", error);
    }
  }
);

// ✅ Razorpay Config
const razorpay = new Razorpay({
  key_id: config.razorpay.key_id,
  key_secret: config.razorpay.key_secret,
});

// ✅ Express App
const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

// ✅ Create Razorpay Order Route
app.post("/createOrder", async (req: Request, res: Response) => {
  try {
    const { amount } = req.body;

    console.log("Incoming request body:", req.body);
    console.log("Parsed amount:", amount);

    if (!amount || isNaN(amount)) {
      console.error("Invalid amount received:", amount);
      return res.status(400).json({ error: "Amount is required and must be a valid number" });
    }

    const options = {
      amount: Number(amount) * 100, // Convert ₹ to paise
      currency: "INR",
      receipt: `receipt_order_${Date.now()}`,
    };

    console.log("Creating Razorpay order with options:", options);

    const order = await razorpay.orders.create(options);
    console.log("Razorpay order created:", order);

    return res.status(200).json(order);
  } catch (error) {
    console.error("Error creating Razorpay order:", error);
    return res.status(500).json({ error: "Failed to create Razorpay order" });
  }
});

// ✅ Export the Express App as a Firebase HTTPS Function
export const api = functions.https.onRequest(app);


