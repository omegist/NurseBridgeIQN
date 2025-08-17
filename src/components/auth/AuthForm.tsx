
"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAuth } from "@/contexts/AuthContext"
import { Loader2 } from "lucide-react"
import AnimatedLogo from "../shared/AnimatedLogo"

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  password: z.string().min(6, { message: "Password must be at least 6 characters." }),
})

const signupSchema = z.object({
  username: z.string().min(2, { message: "Username must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  password: z.string().min(6, { message: "Password must be at least 6 characters." }),
})

const forgotPasswordSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
})

type LoginFormValues = z.infer<typeof loginSchema>
type SignupFormValues = z.infer<typeof signupSchema>
type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>

type AuthState = "login" | "signup" | "forgotPassword"

export function AuthForm() {
  const [authState, setAuthState] = useState<AuthState>("login")
  const [isLoading, setIsLoading] = useState(false)
  const { login, signup, sendPasswordReset } = useAuth()

  const {
    register: registerLogin,
    handleSubmit: handleLoginSubmit,
    formState: { errors: loginErrors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  })

  const {
    register: registerSignup,
    handleSubmit: handleSignupSubmit,
    formState: { errors: signupErrors },
  } = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
  })

  const {
    register: registerForgotPassword,
    handleSubmit: handleForgotPasswordSubmit,
    formState: { errors: forgotPasswordErrors },
  } = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
  })

  const onLogin = async (data: LoginFormValues) => {
    setIsLoading(true)
    await login(data.email, data.password)
    setIsLoading(false)
  }

  const onSignup = async (data: SignupFormValues) => {
    setIsLoading(true)
    await signup(data.email, data.password, data.username)
    setIsLoading(false)
  }

  const onForgotPassword = async (data: ForgotPasswordFormValues) => {
    setIsLoading(true)
    const success = await sendPasswordReset(data.email)
    setIsLoading(false)
    if (success) {
      setAuthState("login")
    }
  }

  const getTitle = () => {
    switch (authState) {
      case "login": return "Welcome Back!"
      case "signup": return "Create Account"
      case "forgotPassword": return "Reset Password"
    }
  }
  
  const getDescription = () => {
      switch (authState) {
        case "login": return "Sign in to continue your journey."
        case "signup": return "Join NURSE IQN to start learning."
        case "forgotPassword": return "Enter your email to receive a password reset link."
      }
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="bg-card p-8 rounded-2xl shadow-2xl border">
          <AnimatedLogo className="h-20 w-20 mx-auto mb-5" />
          <h2 className="text-3xl font-bold text-center font-headline mb-2">
            {getTitle()}
          </h2>
          <p className="text-center text-muted-foreground mb-6">
            {getDescription()}
          </p>

          {authState === "login" && (
            <form onSubmit={handleLoginSubmit(onLogin)} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" {...registerLogin("email")} />
                {loginErrors.email && <p className="text-sm text-destructive">{loginErrors.email.message}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" {...registerLogin("password")} />
                {loginErrors.password && <p className="text-sm text-destructive">{loginErrors.password.message}</p>}
              </div>
              <Button type="submit" className="w-full !mt-6" disabled={isLoading}>
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Login
              </Button>
            </form>
          )}

          {authState === "signup" && (
             <form onSubmit={handleSignupSubmit(onSignup)} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" type="text" {...registerSignup("username")} />
                  {signupErrors.username && <p className="text-sm text-destructive">{signupErrors.username.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" {...registerSignup("email")} />
                  {signupErrors.email && <p className="text-sm text-destructive">{signupErrors.email.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" {...registerSignup("password")} />
                  {signupErrors.password && <p className="text-sm text-destructive">{signupErrors.password.message}</p>}
                </div>
                <Button type="submit" className="w-full !mt-6" disabled={isLoading}>
                  {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Sign Up
                </Button>
            </form>
          )}

          {authState === 'forgotPassword' && (
            <form onSubmit={handleForgotPasswordSubmit(onForgotPassword)} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="forgot-email">Email</Label>
                  <Input id="forgot-email" type="email" {...registerForgotPassword("email")} />
                  {forgotPasswordErrors.email && <p className="text-sm text-destructive">{forgotPasswordErrors.email.message}</p>}
                </div>
                <Button type="submit" className="w-full !mt-6" disabled={isLoading}>
                  {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Send Reset Link
                </Button>
            </form>
          )}
          
          <div className="mt-6 text-center text-sm">
            {authState === "login" && (
                <>
                <span>Don't have an account?</span>
                <Button variant="link" onClick={() => setAuthState("signup")} className="font-semibold">
                    Sign Up
                </Button>
                <div className="mt-2">
                    <Button variant="link" onClick={() => setAuthState("forgotPassword")} className="text-xs">
                        Forgot Password?
                    </Button>
                </div>
                </>
            )}
            {authState === "signup" && (
                 <>
                <span>Already have an account?</span>
                <Button variant="link" onClick={() => setAuthState("login")} className="font-semibold">
                    Login
                </Button>
                </>
            )}
            {authState === "forgotPassword" && (
                 <>
                <span>Remembered your password?</span>
                <Button variant="link" onClick={() => setAuthState("login")} className="font-semibold">
                    Login
                </Button>
                </>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
