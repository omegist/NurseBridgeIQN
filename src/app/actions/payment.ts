
'use server';

import Razorpay from 'razorpay';
import { z } from 'zod';
import { doc, updateDoc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { revalidatePath } from 'next/cache';

const paymentSchema = z.object({
  amount: z.number().positive(),
  userId: z.string(),
});

export async function createOrder(prevState: any, formData: FormData) {
  const keyId = process.env.RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;

  if (!keyId || !keySecret) {
    const errorMessage = 'Razorpay API keys are not configured in environment variables.';
    console.error(errorMessage);
    return { success: false, message: errorMessage };
  }

  const razorpay = new Razorpay({
    key_id: keyId,
    key_secret: keySecret,
  });

  const parsed = paymentSchema.safeParse({
    amount: Number(formData.get('amount')),
    userId: formData.get('userId'),
  });

  if (!parsed.success) {
    return { success: false, message: 'Invalid input data.' };
  }

  const { amount, userId } = parsed.data;

  const options = {
    amount: amount * 100, // Amount in paise
    currency: 'INR',
    receipt: `receipt_user_${userId}_${Date.now()}`,
  };

  try {
    const order = await razorpay.orders.create(options);
    return { success: true, order };
  } catch (error) {
    console.error('Razorpay order creation error:', error);
    return { success: false, message: 'Failed to create payment order.' };
  }
}

export async function updateUserPaymentStatus(userId: string) {
  try {
    const userRef = doc(db, 'users', userId);
    
    await updateDoc(userRef, {
      isPaid: true,
    });

    const userSnap = await getDoc(userRef);
    if (userSnap.exists()) {
      const userData = userSnap.data();
      const paymentRef = doc(db, 'payments', userId);
      await setDoc(paymentRef, {
        userId: userId,
        userEmail: userData.email,
        amount: 2000,
        currency: 'INR',
        paymentDate: serverTimestamp(),
        isPaid: true,
      });
    }

    revalidatePath('/topics');
    revalidatePath('/tests');
    revalidatePath('/flashcards');
    return { success: true, message: 'Payment status updated successfully.' };
  } catch (error) {
    console.error('Failed to update user payment status:', error);
    return { success: false, message: 'Failed to update payment status.' };
  }
}
