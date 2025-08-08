import { onUserCreate } from "firebase-functions/v2/auth";
import type { UserRecord } from "firebase-admin/auth";
import * as logger from "firebase-functions/logger";
import nodemailer = require("nodemailer");

// Configure Nodemailer transporter using Gmail.
const mailTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_EMAIL,
    pass: process.env.GMAIL_PASSWORD,
  },
});

// The email address to send notifications to.
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;

// ✅ Correct event type with only what's used
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
      from: `"Nurse IQN App" <${process.env.GMAIL_EMAIL}>`,
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
