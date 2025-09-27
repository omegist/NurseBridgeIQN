
"use client"

import Link from "next/link"
import React, { useEffect, useState } from "react"
import {
  Menu,
  BarChart2,
  Layers,
  Sun,
  Moon,
  Laptop,
  ClipboardCheck,
  BookOpen,
  Mail,
  MessageSquare,
  LogOut,
  CreditCard,
  BookHeart,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle
} from "@/components/ui/sheet"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { useAuth } from "@/contexts/AuthContext"
import { ThemeToggle } from "./ThemeToggle"
import { useTheme } from "@/contexts/ThemeContext"
import { UserNav } from "../auth/UserNav"
import { useRouter } from "next/navigation"
import { ContactForm } from "./ContactForm"
import { FeedbackForm } from "./FeedbackForm"
import { usePayment } from "@/hooks/usePayment"
import { ScrollArea } from "@/components/ui/scroll-area"
import AnimatedLogo from "../shared/AnimatedLogo"

export function Header() {
  const { user, loading, logout } = useAuth()
  const { setTheme } = useTheme()
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  const [contactFormOpen, setContactFormOpen] = useState(false)
  const [feedbackFormOpen, setFeedbackFormOpen] = useState(false)
  const { openPaymentDialog, isPending } = usePayment();

  useEffect(() => {
    setMounted(true)
  }, [])

  const navLinks = [
    { href: "/topics", icon: BookOpen, text: "Quizzes" },
    { href: "/tests", icon: ClipboardCheck, text: "Tests" },
    { href: "/flashcards", icon: Layers, text: "Flashcards" },
    { href: "/handbook.pdf", icon: BookHeart, text: "Handbook", isExternal: true },
    { href: "/accuracy", icon: BarChart2, text: "Accuracy" },
  ]
  
  const contactLink = {
      icon: Mail, text: "Contact Us"
  }

  const feedbackLink = {
      icon: MessageSquare, text: "Feedback"
  }
  
  const handleHandbookClick = (e: React.MouseEvent) => {
    if (user && !user.isPaid) {
      e.preventDefault();
      openPaymentDialog();
    }
  };

  if (!mounted) {
    return (
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center"></div>
      </header>
    )
  }

  const handleExit = () => {
    router.push('/topics');
  };

  return (
    <>
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        {/* Logo and Mobile Menu */}
        <div className="flex items-center">
          <div className="md:hidden mr-2">
            {user && (
                <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Open menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <SheetHeader className="border-b pb-4">
                    <SheetTitle className="sr-only">Menu</SheetTitle>
                    <Link href="/" className="flex items-center space-x-2">
                        <AnimatedLogo className="h-8 w-auto" />
                    </Link>
                    </SheetHeader>
                    <nav className="flex flex-col space-y-2 mt-4">
                    {navLinks.map(({ href, icon: Icon, text, isExternal }) => (
                        <Button
                        key={text}
                        variant="ghost"
                        className="justify-start"
                        asChild
                        >
                        <Link 
                          href={href} 
                          onClick={text === 'Handbook' ? handleHandbookClick : undefined}
                          target={isExternal ? "_blank" : undefined}
                          rel={isExternal ? "noopener noreferrer" : undefined}
                        >
                            <Icon className="mr-2 h-4 w-4" />
                            {text}
                        </Link>
                        </Button>
                    ))}
                    <Dialog open={contactFormOpen} onOpenChange={setContactFormOpen}>
                        <DialogTrigger asChild>
                            <Button variant="ghost" className="justify-start">
                               <Mail className="mr-2 h-4 w-4" />
                               {contactLink.text}
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>Contact Us</DialogTitle>
                                <DialogDescription>
                                    Have a question or problem? Send us a message and we'll get back to you.
                                </DialogDescription>
                            </DialogHeader>
                            <ContactForm onMessageSent={() => setContactFormOpen(false)} />
                        </DialogContent>
                    </Dialog>
                    <Dialog open={feedbackFormOpen} onOpenChange={setFeedbackFormOpen}>
                        <DialogTrigger asChild>
                            <Button variant="ghost" className="justify-start">
                               <MessageSquare className="mr-2 h-4 w-4" />
                               {feedbackLink.text}
                            </Button>
                        </DialogTrigger>
                         <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>Submit Feedback</DialogTitle>
                                <DialogDescription>
                                    Have an idea or suggestion? We'd love to hear it.
                                </DialogDescription>
                            </DialogHeader>
                            <FeedbackForm onMessageSent={() => setFeedbackFormOpen(false)} />
                        </DialogContent>
                    </Dialog>
                    </nav>
                    <div className="mt-auto pt-4 border-t">
                    <span className="text-sm font-medium text-muted-foreground px-2">Theme</span>
                    <div className="flex flex-col space-y-1 mt-2">
                        <Button variant="ghost" className="justify-start" onClick={() => setTheme("light")}>
                            <Sun className="mr-2 h-4 w-4" />
                            <span>Light</span>
                        </Button>
                        <Button variant="ghost" className="justify-start" onClick={() => setTheme("dark")}>
                            <Moon className="mr-2 h-4 w-4" />
                            <span>Dark</span>
                        </Button>
                        <Button variant="ghost" className="justify-start" onClick={() => setTheme("system")}>
                            <Laptop className="mr-2 h-4 w-4" />
                            <span>System</span>
                        </Button>
                    </div>
                    </div>
                </SheetContent>
                </Sheet>
            )}
          </div>
          <Link href="/" className="flex items-center space-x-2">
             <AnimatedLogo className="h-10 w-auto" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="mr-4 hidden md:flex ml-6">
          {user && (
            <nav className="flex items-center gap-2">
              {navLinks.map(({ href, icon: Icon, text, isExternal }) => (
                <Button key={text} variant="ghost" asChild>
                  <Link 
                    href={href} 
                    onClick={text === 'Handbook' ? handleHandbookClick : undefined}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                  >
                    <Icon className="mr-2 h-4 w-4" />
                    {text}
                  </Link>
                </Button>
              ))}
            </nav>
          )}
        </div>
        
        {/* Right-side Actions */}
        <div className="flex flex-1 items-center justify-end space-x-2">
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg overflow-hidden">
                <ScrollArea className="whitespace-nowrap">
                  <div className="flex items-center space-x-2 pr-4">
                    <div className="hidden md:block">
                        <ThemeToggle />
                    </div>
                    
                    <Dialog open={feedbackFormOpen} onOpenChange={setFeedbackFormOpen}>
                      {user && (
                          <DialogTrigger asChild>
                              <Button variant="ghost" size="icon" className="hidden md:inline-flex">
                                  <MessageSquare className="h-5 w-5" />
                                  <span className="sr-only">Feedback</span>
                              </Button>
                          </DialogTrigger>
                      )}
                       <DialogContent className="sm:max-w-[425px]">
                          <DialogHeader>
                              <DialogTitle>Submit Feedback</DialogTitle>
                              <DialogDescription>
                                 Have an idea or suggestion? We'd love to hear it.
                              </DialogDescription>
                          </DialogHeader>
                          <FeedbackForm onMessageSent={() => setFeedbackFormOpen(false)} />
                      </DialogContent>
                    </Dialog>

                    <Dialog open={contactFormOpen} onOpenChange={setContactFormOpen}>
                        {user && (
                            <DialogTrigger asChild>
                                <Button variant="ghost" size="icon" className="hidden md:inline-flex">
                                    <Mail className="h-5 w-5" />
                                    <span className="sr-only">Contact Us</span>
                                </Button>
                            </DialogTrigger>
                        )}
                         <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>Contact Us</DialogTitle>
                                <DialogDescription>
                                    Have a question or problem? Send us a message and we'll get back to you.
                                </DialogDescription>
                            </DialogHeader>
                            <ContactForm onMessageSent={() => setContactFormOpen(false)} />
                        </DialogContent>
                    </Dialog>
                     {user && !user.isPaid && (
                      <Button onClick={openPaymentDialog} size="sm" className="bg-accent hover:bg-accent/90 shrink-0">
                        <CreditCard className="mr-2 h-4 w-4" />
                        Unlock Full Access
                      </Button>
                    )}

                    {loading ? (
                        <div className="h-8 w-8 rounded-full bg-muted animate-pulse"></div>
                    ) : user ? (
                        <>
                          <UserNav />
                          <Button variant="ghost" size="icon" onClick={logout} className="hidden md:inline-flex">
                              <LogOut className="h-5 w-5" />
                              <span className="sr-only">Logout</span>
                          </Button>
                        </>
                    ) : (
                        <Button onClick={() => router.push('/auth')}>Login</Button>
                    )}
                  </div>
                </ScrollArea>
            </div>
        </div>
      </div>
    </header>
    </>
  )
}
