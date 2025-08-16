
"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useAuth } from "@/contexts/AuthContext";

type Message = {
  text: string;
  sender: "user" | "bot";
};

type FormData = {
  message: string;
};

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hello! Dude. I'm the Nurse IQN assistant. How can I help you?",
      sender: "bot",
    },
  ]);
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm<FormData>();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const lowerCaseMessage = userMessage.toLowerCase();

    if (lowerCaseMessage.includes("what") && lowerCaseMessage.includes("app")) {
      return "This app is designed to help nurses prepare for the IQN exams with interactive quizzes and detailed test modules.";
    }
    if (lowerCaseMessage.includes("premium") || lowerCaseMessage.includes("access")) {
      return "You can unlock full access to all premium quizzes and content by making a one-time payment of ₹2000 through our secure Razorpay gateway.";
    }
    if (lowerCaseMessage.includes("payment") || lowerCaseMessage.includes("pay")) {
        return "To make a payment, navigate to any premium quiz and click the 'Unlock' button. This will open the secure Razorpay payment window.";
    }
    if (lowerCaseMessage.includes("trial") || lowerCaseMessage.includes("free")) {
        return "While there isn't a free trial for premium content, you can explore the app's interface and access some fundamental quizzes for free to see how it works!";
    }
    if (lowerCaseMessage.includes("content")) {
        return "The app includes a wide range of quizzes covering Fundamentals, Pharmacology, Medical-Surgical nursing, and more. Premium access unlocks all test modules.";
    }
    
    // Default response for out-of-scope questions
    return "I'm here to help with app-related questions. Let me know what you'd like to explore!";
  };

  const onSubmit = (data: FormData) => {
    if (!data.message.trim()) return;

    const userMessage: Message = { text: data.message, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    
    setTimeout(() => {
      const botResponse: Message = { text: getBotResponse(data.message), sender: "bot" };
      setMessages((prev) => [...prev, botResponse]);
    }, 500);

    reset();
  };

  const nameInitials = user?.name?.split(' ').map(n => n[0]).join('') || 'U';

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <motion.div
          initial={{ scale: 0, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          <Button
            size="icon"
            className="rounded-full w-16 h-16 shadow-2xl bg-primary hover:bg-primary/90"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Chatbot"
          >
            <AnimatePresence>
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  exit={{ rotate: 90, scale: 0 }}
                >
                  <X className="h-8 w-8 text-primary-foreground" />
                </motion.div>
              ) : (
                 <motion.div
                  key="open"
                  initial={{ rotate: 90, scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  exit={{ rotate: -90, scale: 0 }}
                >
                  <Bot className="h-8 w-8 text-primary-foreground" />
                </motion.div>
              )}
            </AnimatePresence>
          </Button>
        </motion.div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="fixed bottom-24 right-4 sm:right-6 z-40 w-[calc(100vw-2rem)] sm:w-full max-w-sm h-[70vh] sm:h-[60vh] bg-card border rounded-2xl shadow-2xl flex flex-col"
          >
            <div className="p-4 border-b flex items-center gap-3">
               <Bot className="h-6 w-6 text-primary" />
               <h3 className="font-headline text-lg">Nurse IQN Assistant</h3>
            </div>
            
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex items-end gap-2",
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  )}
                >
                  {msg.sender === 'bot' && (
                    <Avatar className="h-8 w-8">
                       <AvatarFallback className="bg-primary/20"><Bot className="h-5 w-5 text-primary" /></AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={cn(
                      "p-3 rounded-2xl max-w-[80%]",
                      msg.sender === "user"
                        ? "bg-primary text-primary-foreground rounded-br-none"
                        : "bg-muted rounded-bl-none"
                    )}
                  >
                    <p className="text-sm">{msg.text}</p>
                  </div>
                   {msg.sender === 'user' && user && (
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user.avatar || undefined} alt={user.name || "User"} />
                      <AvatarFallback className="bg-accent/20">{nameInitials}</AvatarFallback>
                    </Avatar>
                  )}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="p-4 border-t">
              <div className="relative">
                <Input
                  {...register("message")}
                  placeholder="Ask a question..."
                  autoComplete="off"
                  className="pr-12"
                />
                <Button
                  type="submit"
                  size="icon"
                  variant="ghost"
                  className="absolute top-1/2 right-1 -translate-y-1/2"
                >
                  <Send className="h-5 w-5 text-primary" />
                </Button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
