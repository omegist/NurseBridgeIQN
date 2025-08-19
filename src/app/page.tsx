
"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useAuth } from "@/contexts/AuthContext"
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { ProgramCard } from '@/components/landing/ProgramCard'
import { TestimonialCard } from '@/components/landing/TestimonialCard'
import { Award, BarChart, BookOpen, Facebook, Instagram, Linkedin, LucideIcon, Star, Twitter, Youtube } from 'lucide-react'
import { AuthForm } from "@/components/auth/AuthForm"

const programs = [
  {
    title: "Class 4 - 10",
    description: "NURSE-IQN The Learning App",
    image: "https://placehold.co/300x200.png",
    dataAiHint: "child learning"
  },
  {
    title: "JEE / NEET",
    description: "NURSE-IQN Classes",
    image: "https://placehold.co/300x200.png",
    dataAiHint: "online class"
  },
  {
    title: "Class 11 - 12",
    description: "NURSE-IQN The Learning App",
    image: "https://placehold.co/300x200.png",
    dataAiHint: "teenager studying"
  },
  {
    title: "NCLEX/RN",
    description: "NURSE-IQN Test Prep",
    image: "https://placehold.co/300x200.png",
    dataAiHint: "exam preparation"
  },
]

const testimonials = [
  {
    name: "Alisha S.",
    role: "Parent",
    testimonial: "The personalized learning path has been fantastic for my daughter. Her confidence has soared!",
    image: "https://placehold.co/100x100.png",
    dataAiHint: "smiling woman"
  },
  {
    name: "David M.",
    role: "Student",
    testimonial: "I finally understand complex topics thanks to the visualisations. It makes learning fun!",
    image: "https://placehold.co/100x100.png",
    dataAiHint: "smiling man"
  },
  {
    name: "Priya K.",
    role: "Parent",
    testimonial: "The teachers are so supportive. They've helped my son overcome his fear of exams.",
    image: "https://placehold.co/100x100.png",
    dataAiHint: "happy woman"
  },
]

const stats = [
  { value: "150+ Million", label: "Downloads", icon: Award },
  { value: "4.7+ Star", label: "Star rating", icon: Star },
  { value: "1701+ Cities", label: "Cities", icon: BookOpen },
  { value: "71 mins avg.", label: "Time spent daily", icon: BarChart },
]

export default function HomePage() {
  const { user, loading } = useAuth()

  if (loading) {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
        </div>
    );
  }

  return (
    <div className="bg-background text-foreground">
      {/* Header */}
      <header className="bg-green-700 text-white p-3 text-center text-sm">
        <p>Get a call from our Academic Counsellor | Call us on 9241333666</p>
      </header>

      {/* Hero Section */}
      <section className="relative hero-gradient text-white py-16 px-4 overflow-hidden">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-5xl font-bold font-headline mb-4">SEE, UNDERSTAND, EXCEL.</h1>
            <p className="text-2xl mb-8">Learn with ease</p>
            <div className="relative h-64 w-full md:h-96">
                <Image src="https://placehold.co/600x400.png" alt="Happy student" layout="fill" objectFit="contain" data-ai-hint="happy student"/>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            {user ? (
                <div className="text-center bg-card/20 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
                    <h2 className="text-3xl font-bold mb-4">Welcome back, {user.name || 'Learner'}!</h2>
                    <p className="text-lg mb-6">Continue your learning journey with us.</p>
                     <Button asChild size="lg" className="mt-8 rounded-full px-12 py-6 text-xl shadow-lg bg-pink-600 hover:bg-pink-700 text-white">
                        <Link href="/topics">Start Learning</Link>
                    </Button>
                </div>
            ) : (
                <div className="w-full max-w-md">
                    <AuthForm />
                </div>
            )}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-2">Comprehensive learning programs</h2>
          <p className="text-muted-foreground mb-8">& classes for all students</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, index) => (
              <ProgramCard key={index} {...program} />
            ))}
          </div>
        </div>
      </section>
      
      {/* BYJU'S Advantage */}
      <section className="py-16 bg-secondary">
          <div className="container mx-auto text-center">
              <h2 className="text-3xl font-bold mb-10">Get the NURSE-IQN advantage</h2>
              <div className="grid md:grid-cols-3 gap-12">
                  <div className="flex flex-col items-center">
                      <Image src="https://placehold.co/200x150.png" alt="Visualisation" width={200} height={150} data-ai-hint="learning concepts"/>
                      <h3 className="text-xl font-semibold mt-4">Concept clarity through visualisation</h3>
                  </div>
                  <div className="flex flex-col items-center">
                      <Image src="https://placehold.co/200x150.png" alt="Personalised Learning" width={200} height={150} data-ai-hint="personalized education"/>
                      <h3 className="text-xl font-semibold mt-4">Personalised learning programs</h3>
                  </div>
                   <div className="flex flex-col items-center">
                      <Image src="https://placehold.co/200x150.png" alt="Unmatched attention" width={200} height={150} data-ai-hint="student teacher"/>
                      <h3 className="text-xl font-semibold mt-4">Unmatched individual attention</h3>
                  </div>
              </div>
          </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-10">Our students and parents love us</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                {stats.map(stat => (
                    <div key={stat.label} className="flex flex-col items-center">
                        <stat.icon className="w-10 h-10 text-primary mb-2" />
                        <p className="text-2xl font-bold">{stat.value}</p>
                        <p className="text-muted-foreground">{stat.label}</p>
                    </div>
                ))}
            </div>
            <div className="relative">
                <div className="flex overflow-x-auto snap-x snap-mandatory gap-8 pb-4">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="snap-center shrink-0 w-80">
                        <TestimonialCard {...testimonial} />
                    </div>
                ))}
                </div>
            </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="footer-gradient text-white py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">COURSES</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:underline">NCLEX</Link></li>
                <li><Link href="#" className="hover:underline">CBT</Link></li>
                <li><Link href="#" className="hover:underline">OSCE</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">SUPPORT</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:underline">Contact Us</Link></li>
                <li><Link href="#" className="hover:underline">FAQs</Link></li>
                <li><Link href="#" className="hover:underline">Terms & Conditions</Link></li>
                <li><Link href="#" className="hover:underline">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">COMPANY</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:underline">About Us</Link></li>
                <li><Link href="#" className="hover:underline">Careers</Link></li>
                <li><Link href="#" className="hover:underline">Blog</Link></li>
              </ul>
            </div>
            <div>
                <h3 className="font-bold mb-4">Follow us</h3>
                <div className="flex space-x-4">
                    <Link href="#" aria-label="Facebook"><Facebook/></Link>
                    <Link href="#" aria-label="Twitter"><Twitter/></Link>
                    <Link href="#" aria-label="Youtube"><Youtube/></Link>
                    <Link href="#" aria-label="Instagram"><Instagram/></Link>
                    <Link href="#" aria-label="LinkedIn"><Linkedin/></Link>
                </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
            <p>&copy; {new Date().getFullYear()} NURSE-IQN. All rights reserved.</p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <span>Payments accepted:</span>
                <Image src="https://placehold.co/150x25.png" alt="Payment methods" width={150} height={25} data-ai-hint="visa mastercard paypal"/>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
