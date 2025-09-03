import { onUserCreate } from "firebase-functions/v2/auth";
import type { UserRecord } from "firebase-admin/auth";
import { logger } from "firebase-functions/v2";
import nodemailer from "nodemailer";

import * as functions from "firebase-functions";
import Razorpay from "razorpay";
import express, { Request, Response } from "express";
import cors from "cors";

// Get Firebase Config variables
const config = functions.config();

// ================================
// 🔹 Email Notification on User Signup
// ================================

const mailTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: config.gmail.email,
    pass: config.gmail.password,
  },
});

const ADMIN_EMAIL = config.admin.email;

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

// ================================
// 🔹 Razorpay Payment Order Creation
// ================================

const razorpay = new Razorpay({
  key_id: config.razorpay.key_id,
  key_secret: config.razorpay.key_secret,
});

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.post("/createOrder", async (req: Request, res: Response) => {
  try {
    const { amount } = req.body;

    if (!amount) {
      return res.status(400).json({ error: "Amount is required" });
    }

    const options = {
      amount: amount * 100, // amount in paise
      currency: "INR",
      receipt: "receipt_order_" + Date.now(),
    };

    const order = await razorpay.orders.create(options);
    return res.status(200).json(order);  // Explicit return added here
  } catch (err) {
    console.error("Error creating Razorpay order:", err);
    return res.status(500).json({ error: "Failed to create payment order" });  // Explicit return added here
  }
});

export const api = functions.https.onRequest(app);

