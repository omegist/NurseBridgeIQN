'use client';

import { useTransition } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { updateUserPaymentStatus } from '@/app/actions/payment';

declare global {
  interface Window {
    Razorpay: any;
  }
}

const loadRazorpayScript = (): Promise<boolean> => {
  return new Promise((resolve) => {
    const existingScript = document.querySelector(
      'script[src="https://checkout.razorpay.com/v1/checkout.js"]'
    );
    if (existingScript) {
      resolve(true);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => {
      console.error('Razorpay script failed to load.');
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

export function usePayment() {
  const { user, refreshUser } = useAuth();
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();

  const openPaymentDialog = async () => {
    const scriptLoaded = await loadRazorpayScript();

    if (!scriptLoaded) {
      toast({
        variant: 'destructive',
        title: 'Payment Gateway Error',
        description:
          'The payment gateway could not be loaded. Please check your internet connection and try again.',
      });
      return;
    }

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
        // ✅ Send ₹2000 as 200000 paise
        const response = await fetch('/api/createorder', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ amount: 200000 }),
        });

        if (!response.ok) {
          const errorText = await response.text();
          console.error('Failed to create order. Server responded with:', errorText);
          throw new Error(`Server error: ${response.status} ${response.statusText}`);
        }

        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          const responseText = await response.text();
          console.error('Expected JSON response but received:', responseText);
          throw new Error('Invalid response from server. Please contact support.');
        }

        const order = await response.json();

        const options = {
          key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
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
              await refreshUser();
            } else {
              toast({
                variant: 'destructive',
                title: 'Payment Verification Failed',
                description:
                  'Your payment was successful but we failed to update your account. Please contact support.',
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
        razorpay.on('payment.failed', function (response: any) {
          console.error('Razorpay payment failed:', response.error);
          toast({
            variant: 'destructive',
            title: 'Payment Failed',
            description:
              response.error.description || 'An unknown error occurred during payment.',
          });
        });
        razorpay.open();
      } catch (error: any) {
        toast({
          variant: 'destructive',
          title: 'Could Not Create Order',
          description: error.message || 'An unknown error occurred. Please contact support.',
        });
      }
    });
  };

  return { openPaymentDialog, isPending };
}