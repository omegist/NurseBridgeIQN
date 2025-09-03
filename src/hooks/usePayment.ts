
'use client';

import { useActionState, useEffect, useTransition } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { createOrder, updateUserPaymentStatus } from '@/app/actions/payment';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { CreditCard, Loader2 } from 'lucide-react';
import { useState } from 'react';

export function usePayment() {
  const { user, refreshUser } = useAuth();
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();
  const [orderState, createOrderAction] = useActionState(createOrder, {
    success: false,
    order: undefined,
    message: '',
  });

  const openPaymentDialog = () => {
    if (!user) {
      toast({
        variant: 'destructive',
        title: 'Authentication Error',
        description: 'You must be logged in to make a payment.',
      });
      return;
    }

    const formData = new FormData();
    formData.append('amount', '2000');
    formData.append('userId', user.uid);

    startTransition(() => {
      createOrderAction(formData);
    });
  };

  const processOrder = (state: typeof orderState) => {
    if (state.success && state.order && user) {
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || '',
        amount: state.order.amount,
        currency: state.order.currency,
        name: 'Nurse IQN',
        description: 'Unlock Full App Access',
        order_id: state.order.id,
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

      try {
        const rzp = new window.Razorpay(options);
        rzp.open();
      } catch (error) {
        console.error("Razorpay Error:", error);
        toast({
          variant: "destructive",
          title: "Payment Error",
          description: "Could not display payment window. Please check for ad-blockers or try another browser.",
        });
      }
    } else if (!state.success && state.message && state.message !== '') {
      toast({
        variant: 'destructive',
        title: 'Could Not Create Order',
        description: state.message,
      });
    }
  };

  useEffect(() => {
    if (orderState.success && orderState.order) {
      processOrder(orderState);
    } else if (!orderState.success && orderState.message && !isPending) {
      if (orderState.message !== '') {
        toast({
          variant: 'destructive',
          title: 'Could Not Create Order',
          description: orderState.message,
        });
      }
    }
  }, [orderState, isPending]);

  return { openPaymentDialog, isPending };
}
