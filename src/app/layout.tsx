
import type { Metadata } from "next"
import { Belleza, Alegreya } from 'next/font/google'
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import { AuthProvider } from "@/contexts/AuthContext"
import { QuizProvider } from "@/contexts/QuizContext"
import { ThemeProvider } from "@/contexts/ThemeContext"
import { TestProvider } from "@/contexts/TestContext"
import { FloatingBubbles } from "@/components/layout/FloatingBubbles"
import Script from "next/script"

const belleza = Belleza({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-belleza',
});

const alegreya = Alegreya({
  subsets: ['latin'],
  variable: '--font-alegreya',
});


export const metadata: Metadata = {
  title: "NURSE IQN",
  description: "A nursing quiz app to test your knowledge.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/nurseiqn-logo.png" type="image/png" />
      </head>
      <body className={`${belleza.variable} ${alegreya.variable} font-body antialiased`}>
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
        <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="lazyOnload" />
      </body>
    </html>
  )
}
