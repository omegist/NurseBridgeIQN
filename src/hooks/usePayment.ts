
'use client';

import { useActionState, useTransition } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { createOrder, updateUserPaymentStatus } from '@/app/actions/payment';

export function usePayment() {
  const { user, refreshUser } = useAuth();
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();
  const [orderState, createOrderAction] = useActionState(createOrder, {
    success: false,
    order: null,
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

  // Effect to handle order creation and open Razorpay checkout
  // This effect depends on `orderState`, which is updated by `createOrderAction`
  // We cannot use useEffect here as it's a hook and can't be called conditionally.
  // Instead, the component using this hook should trigger this logic when orderState changes.
  
  const processOrder = (state: typeof orderState) => {
    if (state.success && state.order && user) {
        const options = {
            key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
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
                    refreshUser(); // Refresh user data to reflect paid status
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

        const rzp = new window.Razorpay(options);
        rzp.open();
    } else if (!state.success && state.message) {
        toast({
            variant: 'destructive',
            title: 'Payment Error',
            description: state.message,
        });
    }
  };

  // This hook now returns the state and the action trigger
  return { orderState, openPaymentDialog, processOrder, isPending };
}
