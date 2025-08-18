'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { sendFeedbackEmail } from '@/app/actions/send-feedback-email';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

interface FeedbackFormProps {
  onMessageSent: () => void;
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      Send Feedback
    </Button>
  );
}

export function FeedbackForm({ onMessageSent }: FeedbackFormProps) {
  const { user } = useAuth();
  const { toast } = useToast();
  const [state, formAction] = useActionState(sendFeedbackEmail, {
    success: false,
    message: '',
  });

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: 'Success!',
          description: state.message,
        });
        onMessageSent();
      } else {
        toast({
          variant: 'destructive',
          title: 'Error',
          description: state.message,
        });
      }
    }
  }, [state, toast, onMessageSent]);

  return (
    <form action={formAction} className="grid gap-4 py-4">
      <input type="hidden" name="userEmail" value={user?.email || ''} />
      <input type="hidden" name="userName" value={user?.name || ''} />
      <div className="grid gap-2">
        <Label htmlFor="message">Your Feedback</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Ideas to improve this page..."
          required
          rows={5}
        />
      </div>
      <SubmitButton />
    </form>
  );
}
