import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Checkbox } from './ui/checkbox'
import { Mail, Lock, Eye, EyeOff, Loader2, AlertCircle } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

export default function Login() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const emailInputRef = useRef(null)

  useEffect(() => {
    emailInputRef.current?.focus()
  }, [])

  const validateEmail = (email) => {
    if (!email) return 'Email is required'
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) return 'Please enter a valid email address'
    return ''
  }

  const validatePassword = (password) => {
    if (!password) return 'Password is required'
    if (password.length < 6) return 'Password must be at least 6 characters'
    return ''
  }

  const handleBlur = (field) => {
    setTouched(prev => ({ ...prev, [field]: true }))
    if (field === 'email') {
      setErrors(prev => ({ ...prev, email: validateEmail(email) }))
    } else if (field === 'password') {
      setErrors(prev => ({ ...prev, password: validatePassword(password) }))
    }
  }

  const handleEmailChange = (e) => {
    const value = e.target.value
    setEmail(value)
    if (touched.email) {
      setErrors(prev => ({ ...prev, email: validateEmail(value) }))
    }
  }

  const handlePasswordChange = (e) => {
    const value = e.target.value
    setPassword(value)
    if (touched.password) {
      setErrors(prev => ({ ...prev, password: validatePassword(value) }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    setTouched({ email: true, password: true })
    
    const emailError = validateEmail(email)
    const passwordError = validatePassword(password)
    
    if (emailError || passwordError) {
      setErrors({ email: emailError, password: passwordError })
      return
    }

    setIsLoading(true)
    setErrors({})
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      console.log('Login:', { email, password, rememberMe })
    } catch (error) {
      setErrors({ submit: 'Login failed. Please check your credentials and try again.' })
    } finally {
      setIsLoading(false)
    }
  }

  const isFormValid = !validateEmail(email) && !validatePassword(password) && email && password

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      className="w-full px-4 sm:px-6"
    >
      <Card className="w-full max-w-md mx-auto sm:max-w-lg shadow-xl relative overflow-hidden">
        <div 
          className={`absolute inset-0 transition-all duration-500 ${
            isDark 
              ? 'bg-background text-black' 
              : 'bg-[hsl(0,0%,100%)] text-white'
          }`}
          style={{
            clipPath: 'polygon(0 0, 0 100%, 100% 100%)'
          }}
        />
        <div 
          className={`absolute inset-0 transition-all duration-500 ${
            isDark 
              ? 'bg-[hsl(0,0%,100%)] text-black' 
              : 'bg-[hsl(222.2,84%,4.9%)] text-white'
          }`}
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 100%)'
          }}
        />
        <div className="relative z-10">
          <CardHeader className="space-y-2 sm:space-y-3 text-center pb-4 sm:pb-6 px-4 sm:px-6 pt-6 sm:pt-8">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            >
              <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2 dark:text-background">
                Welcome back
              </CardTitle>
            </motion.div>
            <CardDescription className="text-sm sm:text-base text-white dark:text-background">
              Login to your account
            </CardDescription>
          </CardHeader>
          <CardContent className="px-4 sm:px-6 pb-6 sm:pb-8">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5" noValidate>
              {errors.submit && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-sm"
                >
                  <AlertCircle className="h-4 w-4 flex-shrink-0" />
                  <span>{errors.submit}</span>
                </motion.div>
              )}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                className="space-y-2"
              >
                <Label htmlFor="email" className="text-sm font-semibold text-foreground/90">
                  Email Address
                </Label>
                <div className="relative group">
                  <Mail className="absolute left-3 sm:left-3.5 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground dark:text-muted-foreground group-focus-within:text-foreground transition-colors duration-200 z-10 pointer-events-none" />
                  <Input
                    ref={emailInputRef}
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={handleEmailChange}
                    onBlur={() => handleBlur('email')}
                    className={`pl-10 sm:pl-11 h-11 sm:h-12 text-sm sm:text-base dark:bg-background/40 bg-background/50 hover:bg-background/70 dark:hover:bg-background/60 focus:bg-background dark:focus:bg-background/70 transition-all duration-300 ${
                      errors.email ? 'border-destructive focus-visible:ring-destructive' : ''
                    }`}
                    aria-invalid={errors.email ? 'true' : 'false'}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    autoComplete="email"
                    disabled={isLoading}
                  />
                </div>
                {errors.email && touched.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    id="email-error"
                    className="text-sm text-destructive flex items-center gap-1.5"
                    role="alert"
                  >
                    <AlertCircle className="h-3.5 w-3.5 flex-shrink-0" />
                    {errors.email}
                  </motion.p>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                className="space-y-2"
              >
                <Label htmlFor="password" className="text-sm font-semibold text-foreground/90">
                  Password
                </Label>
                <div className="relative group">
                  <Lock className="absolute left-3 sm:left-3.5 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground dark:text-muted-foreground group-focus-within:text-foreground transition-colors duration-200 z-10 pointer-events-none" />
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    value={password}
                    onChange={handlePasswordChange}
                    onBlur={() => handleBlur('password')}
                    className={`pl-10 sm:pl-11 pr-10 sm:pr-11 h-11 sm:h-12 text-sm sm:text-base dark:bg-background/40 bg-background/50 hover:bg-background/70 dark:hover:bg-background/60 focus:bg-background dark:focus:bg-background/70 transition-all duration-300 ${
                      errors.password ? 'border-destructive focus-visible:ring-destructive' : ''
                    }`}
                    aria-invalid={errors.password ? 'true' : 'false'}
                    aria-describedby={errors.password ? 'password-error' : undefined}
                    autoComplete="current-password"
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 sm:right-3.5 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors duration-200 p-1.5 rounded-md hover:bg-background/20 z-10 touch-manipulation"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                    tabIndex={0}
                    disabled={isLoading}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4 sm:h-5 sm:w-5" /> : <Eye className="h-4 w-4 sm:h-5 sm:w-5" />}
                  </button>
                </div>
                {errors.password && touched.password && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    id="password-error"
                    className="text-sm text-destructive flex items-center gap-1.5"
                    role="alert"
                  >
                    <AlertCircle className="h-3.5 w-3.5 flex-shrink-0" />
                    {errors.password}
                  </motion.p>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 pt-1"
              >
                <div className="flex items-center space-x-2.5 group">
                  <Checkbox
                    id="remember"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="cursor-pointer border-2 data-[state=checked]:bg-foreground data-[state=checked]:border-foreground touch-manipulation"
                    disabled={isLoading}
                  />
                  <Label
                    htmlFor="remember"
                    className="text-sm font-medium cursor-pointer text-foreground/80 group-hover:text-foreground transition-colors select-none"
                  >
                    Remember me
                  </Label>
                </div>
                <button
                  type="button"
                  className="text-sm font-medium text-white dark:text-background hover:text-foreground/80 hover:underline transition-all duration-200 text-left sm:text-right touch-manipulation"
                  onClick={() => console.log('Forgot password')}
                  disabled={isLoading}
                >
                  Forgot password?
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                className="pt-2"
              >
                <Button
                  type="submit"
                  className="w-full h-11 sm:h-12 text-sm sm:text-base font-semibold bg-foreground text-background hover:bg-foreground/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 touch-manipulation"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 sm:h-5 sm:w-5 animate-spin" />
                      Signing in...
                    </>
                  ) : (
                    'Sign In with Email'
                  )}
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="text-center text-xs sm:text-sm pt-3 sm:pt-4 border-t border-border/50"
              >
                <span className="text-muted-foreground">Don't have an account? </span>
                <Link
                  to="/register"
                  className="text-foreground hover:text-foreground/80 hover:underline font-semibold transition-all duration-200 touch-manipulation"
                >
                  Sign up
                </Link>
              </motion.div>
            </form>
          </CardContent>
        </div>
      </Card>
    </motion.div>
  )
}
