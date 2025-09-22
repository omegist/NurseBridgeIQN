'use server';

import { doc, updateDoc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { revalidatePath } from 'next/cache';

export async function updateUserPaymentStatus(userId: string) {
  try {
    const userRef = doc(db, 'users', userId);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
      return {
        success: false,
        message: 'User not found.',
      };
    }

    const userData = userSnap.data();

    // ✅ Update isPaid field
    await updateDoc(userRef, {
      isPaid: true,
    });

    // ✅ Create payment record
    const paymentRef = doc(db, 'payments', userId);
    await setDoc(paymentRef, {
      userId: userId,
      userEmail: userData.email,
      amount: 2000,
      currency: 'INR',
      paymentDate: serverTimestamp(),
      isPaid: true,
    });

    // ✅ Revalidate content
    revalidatePath('/topics');
    revalidatePath('/tests');
    revalidatePath('/flashcards');

    return {
      success: true,
      message: 'Payment status updated successfully.',
    };
  } catch (error) {
    console.error('❌ Failed to update user payment status:', error);
    return {
      success: false,
      message: 'Failed to update payment status.',
    };
  }
}

