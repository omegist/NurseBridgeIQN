import type { Metadata } from "next"
import { Alegreya, Belleza } from 'next/font/google'
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import { AuthProvider } from "@/contexts/AuthContext"
import { QuizProvider } from "@/contexts/QuizContext"
import { ThemeProvider } from "@/contexts/ThemeContext"
import { TestProvider } from "@/contexts/TestContext"
import { FloatingBubbles } from "@/components/layout/FloatingBubbles"
import Script from "next/script"

const alegreya = Alegreya({
  subsets: ['latin'],
  variable: '--font-body',
});

const belleza = Belleza({
  subsets: ['latin'],
  weight: "400",
  variable: '--font-headline',
});

export const metadata: Metadata = {
  title: "NURSE IQN",
  description: "A nursing quiz app to test your knowledge.",
  icons: {
    icon: '/nurseiqn-logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="lazyOnload" />
      </head>
      <body className={`${alegreya.variable} ${belleza.variable} font-body antialiased`}>
        <ThemeProvider storageKey="nurse-iqn-theme" defaultTheme="dark">
          <AuthProvider>
            <QuizProvider>
              <TestProvider>
                <div className="relative flex min-h-screen flex-col">
                  <FloatingBubbles />
                  <main className="flex-1">{children}</main>
                </div>
                <Toaster />
              </TestProvider>
            </QuizProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
