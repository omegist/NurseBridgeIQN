
'use server';

import { z } from 'zod';
import { Resend } from 'resend';

const sendEmailSchema = z.object({
  message: z.string().min(10, { message: 'Message must be at least 10 characters long.' }),
  userEmail: z.string().email().optional(),
  userName: z.string().optional(),
});

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(prevState: any, formData: FormData) {
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
  const fromEmail = userEmail || 'anonymous@nurse-iqn.com';
  const fromName = userName || 'Anonymous User';

  try {
    const { data, error } = await resend.emails.send({
      from: 'Nurse IQN Contact Form <onboarding@resend.dev>',
      to: ['hrishichavan2349@gmail.com'],
      subject: `New Query from ${fromName}`,
      reply_to: fromEmail,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>From:</strong> ${fromName} (${fromEmail})</p>
        <hr>
        <h2>Message:</h2>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return { success: false, message: 'Failed to send email. Please try again later.' };
    }

    return { success: true, message: 'Your message has been sent successfully!' };
  } catch (error) {
    console.error('Email Sending Error:', error);
    return { success: false, message: 'An unexpected error occurred.' };
  }
}
