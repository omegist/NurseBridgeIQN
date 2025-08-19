'use server';

import { z } from 'zod';
import { Resend } from 'resend';

const sendEmailSchema = z.object({
  message: z.string().min(10, { message: 'Message must be at least 10 characters long.' }),
  userEmail: z.string().email().optional().or(z.literal('')),
  userName: z.string().optional(),
});

const resend = new Resend(process.env.RESEND_API_KEY);
const supportEmail = 'hrishichavan2349@gmail.com';

export async function sendFeedbackEmail(prevState: any, formData: FormData) {
  const parsed = sendEmailSchema.safeParse({
    message: formData.get('message'),
    userEmail: formData.get('userEmail'),
    userName: formData.get('userName'),
  });

  if (!parsed.success) {
    return {
      success: false,
      message: parsed.error.errors.map(e => e.message).join(', '),
    };
  }

  const { message, userEmail, userName } = parsed.data;
  const fromEmail = userEmail || 'anonymous-user@nurse-iqn.com';
  const fromName = userName || 'Anonymous User';

  try {
    const { data, error } = await resend.emails.send({
      from: 'Nurse IQN Feedback <onboarding@resend.dev>',
      to: [supportEmail],
      subject: `New Feedback from ${fromName}`,
      replyTo: fromEmail,
      html: `
        <h1>New Feedback Form Submission</h1>
        <p><strong>From:</strong> ${fromName} (${fromEmail})</p>
        <hr>
        <h2>Feedback:</h2>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error('Resend API Error:', error);
      // More robust error message handling
      const errorMessage = error.message || JSON.stringify(error);
      return {
        success: false,
        message: `Failed to send email. Error: ${errorMessage}`,
      };
    }

    return {
      success: true,
      message: 'Your feedback has been sent successfully!',
    };
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Email Sending Error:', error.message);
      return {
        success: false,
        message: `An unexpected error occurred: ${error.message}`,
      };
    }

    console.error('Unknown error during email sending:', error);
    return {
      success: false,
      message: 'An unexpected error occurred. Please check the server logs.',
    };
  }
}
