'use client';

import { useState } from 'react';
import { useFormStatus } from 'react-dom';
import { useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { sendEmail } from '@/app/actions/send-email';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

interface ContactFormProps {
  onMessageSent: () => void;
}

function SubmitButton({ pending }: { pending: boolean }) {
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      Send Message
    </Button>
  );
}

export function ContactForm({ onMessageSent }: ContactFormProps) {
  const { user } = useAuth();
  const { toast } = useToast();
  const [pending, setPending] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);

    const formData = new FormData(event.currentTarget);
    const result = await sendEmail(formData);

    if (result.success) {
      toast({ title: 'Success!', description: result.message });
      onMessageSent();
      event.currentTarget.reset();
    } else {
      toast({ variant: 'destructive', title: 'Error', description: result.message });
    }

    setPending(false);
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 py-4">
      <input type="hidden" name="userEmail" value={user?.email || ''} />
      <input type="hidden" name="userName" value={user?.name || ''} />
      <div className="grid gap-2">
        <Label htmlFor="message">Your Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Please describe your issue or question here..."
          required
          rows={5}
        />
      </div>
      <SubmitButton pending={pending} />
    </form>
  );
}