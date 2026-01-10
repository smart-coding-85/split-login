import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Checkbox } from './ui/checkbox'
import { Mail, Lock, Eye, EyeOff } from 'lucide-react'

export default function Login({ onSwitchToRegister }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Login:', { email, password, rememberMe })
    // Add your login logic here
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
    >
      <Card className="w-full max-w-md mx-auto sm:max-w-lg shadow-xl">
        <CardHeader className="space-y-3 text-center pb-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            <CardTitle className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
              Welcome back
            </CardTitle>
          </motion.div>
          <CardDescription className="text-base text-muted-foreground">
            Login to your account
          </CardDescription>
        </CardHeader>
        <CardContent className="px-6 pb-6">
          <form onSubmit={handleSubmit} className="space-y-5">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="space-y-2.5"
            >
              <Label htmlFor="email" className="text-sm font-semibold text-foreground/90">
                Email Address
              </Label>
              <div className="relative group">
                <Mail className="absolute left-3.5 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground dark:text-muted-foreground group-focus-within:text-foreground transition-colors duration-200 z-10 pointer-events-none" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-11 h-12 text-base dark:bg-background/40 bg-background/50 hover:bg-background/70 dark:hover:bg-background/60 focus:bg-background dark:focus:bg-background/70 transition-all duration-300"
                  required
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="space-y-2.5"
            >
              <Label htmlFor="password" className="text-sm font-semibold text-foreground/90">
                Password
              </Label>
              <div className="relative group">
                <Lock className="absolute left-3.5 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground dark:text-muted-foreground group-focus-within:text-foreground transition-colors duration-200 z-10 pointer-events-none" />
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-11 pr-11 h-12 text-base dark:bg-background/40 bg-background/50 hover:bg-background/70 dark:hover:bg-background/60 focus:bg-background dark:focus:bg-background/70 transition-all duration-300"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors duration-200 p-1 rounded-md hover:bg-background/20 z-10"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="flex items-center justify-between pt-1"
            >
              <div className="flex items-center space-x-2.5 group">
                <Checkbox
                  id="remember"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="cursor-pointer border-2 data-[state=checked]:bg-foreground data-[state=checked]:border-foreground"
                />
                <Label
                  htmlFor="remember"
                  className="text-sm font-medium cursor-pointer text-foreground/80 group-hover:text-foreground transition-colors"
                >
                  Remember me
                </Label>
              </div>
              <button
                type="button"
                className="text-sm font-medium text-foreground hover:text-foreground/80 hover:underline transition-all duration-200"
                onClick={() => console.log('Forgot password')}
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
                className="w-full h-12 text-base font-semibold bg-foreground text-background hover:bg-foreground/90 transition-all duration-300"
              >
                Sign In with Email
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="text-center text-sm pt-4 border-t border-border/50"
            >
              <span className="text-muted-foreground">Don't have an account? </span>
              <button
                type="button"
                onClick={onSwitchToRegister}
                className="text-foreground hover:text-foreground/80 hover:underline font-semibold transition-all duration-200"
              >
                Sign up
              </button>
            </motion.div>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  )
}
