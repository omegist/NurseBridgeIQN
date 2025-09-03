'use client';

import { useEffect, useState, useTransition } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { updateUserPaymentStatus } from '@/app/actions/payment';

declare global {
  interface Window {
    Razorpay: any;
  }
}

export function usePayment() {
  const { user, refreshUser } = useAuth();
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();

  const openPaymentDialog = async () => {
    if (!user) {
      toast({
        variant: 'destructive',
        title: 'Authentication Error',
        description: 'You must be logged in to make a payment.',
      });
      return;
    }

    startTransition(async () => {
      try {
        const response = await fetch('/api/createOrder', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ amount: 2000 }),
        });

        const order = await response.json();

        if (!response.ok) {
          throw new Error(order.message || 'Failed to create payment order');
        }

        const options = {
          key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || '',
          amount: order.amount,
          currency: order.currency,
          name: 'Nurse IQN',
          description: 'Unlock Full App Access',
          order_id: order.id,
          handler: async (response: any) => {
            const { success } = await updateUserPaymentStatus(user.uid);
            if (success) {
              toast({
                title: 'Payment Successful!',
                description: 'You now have full access to all features.',
              });
              refreshUser();
            } else {
              toast({
                variant: 'destructive',
                title: 'Payment Verification Failed',
                description: 'Please contact support.',
              });
            }
          },
          prefill: {
            name: user.name || '',
            email: user.email || '',
          },
          theme: {
            color: '#8A2BE2',
          },
        };

        const razorpay = new window.Razorpay(options);
        razorpay.open();
      } catch (error: any) {
        toast({
          variant: 'destructive',
          title: 'Could Not Create Order',
          description: error.message || 'An unknown error occurred.',
        });
      }
    });
  };

  return { openPaymentDialog, isPending };
}
