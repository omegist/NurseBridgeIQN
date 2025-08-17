
import type { Metadata } from "next"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import { AuthProvider } from "@/contexts/AuthContext"
import { QuizProvider } from "@/contexts/QuizContext"
import { ThemeProvider } from "@/contexts/ThemeContext"
import { Header } from "@/components/layout/Header"
import { TestProvider } from "@/contexts/TestContext"
import { Chatbot } from "@/components/chatbot/Chatbot"

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
        <script
            src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
            async
            defer
        ></script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400..900;1,400..900&family=Belleza&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider storageKey="nurse-iqn-theme">
          <AuthProvider>
            <QuizProvider>
              <TestProvider>
                <div className="relative flex min-h-screen flex-col">
                  <Header />
                  <main className="flex-1">{children}</main>
                </div>
                <Toaster />
                <Chatbot />
              </TestProvider>
            </QuizProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
