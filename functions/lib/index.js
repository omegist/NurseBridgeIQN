"use strict";
/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendNewUserEmail = void 0;
const auth_1 = require("firebase-functions/v2/auth");
const logger = __importStar(require("firebase-functions/logger"));
const nodemailer = __importStar(require("nodemailer"));
// Configure Nodemailer transporter using Gmail.
// IMPORTANT: For production, use a dedicated transactional email service 
// like SendGrid, Mailgun, or Amazon SES. Using Gmail for production
// is not recommended due to security and rate limits.
const mailTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_PASSWORD,
    },
});
// The email address to send notifications to.
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
// This function triggers when a new user is created.
exports.sendNewUserEmail = (0, auth_1.onUserCreate)(async (event) => {
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
    }
    catch (error) {
        logger.error("There was an error while sending the email:", error);
    }
});
//# sourceMappingURL=index.js.map