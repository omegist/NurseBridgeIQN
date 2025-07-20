/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import {onUserCreate} from "firebase-functions/v2/auth";
import * as logger from "firebase-functions/logger";
import * as nodemailer from "nodemailer";

// Configure Nodemailer transporter using Gmail.
// IMPORTANT: For production, use a dedicated transactional email service 
// like SendGrid, Mailgun, or Amazon SES. Using Gmail for production
// is not recommended due to security and rate limits.
// You will need to set your Gmail email and an "App Password" in your
// Firebase Functions environment configuration.
// How to set environment variables: https://firebase.google.com/docs/functions/configuration
const mailTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_EMAIL,
    pass: process.env.GMAIL_PASSWORD,
  },
});

// The email address to send notifications to.
// Configure this in your environment variables.
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;


// This function triggers when a new user is created.
export const sendNewUserEmail = onUserCreate(async (event) => {
  const user = event.data; // The user object.
  const email = user.email; // The email of the user.
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
    logger.error(
      "There was an error while sending the email:",
      error
    );
  }
});
