import { useState } from 'react'
import { motion } from 'framer-motion'
import Login from './components/Login'
import Register from './components/Register'
import ThemeToggle from './components/ThemeToggle'
import './App.css'

function App() {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className="min-h-screen w-full overflow-hidden relative bg-background transition-colors duration-300">
      {/* Theme Toggle */}
      <ThemeToggle />
      
      {/* Main content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 py-8 sm:py-12">
        <motion.div
          key={isLogin ? 'login' : 'register'}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="w-full"
        >
          {isLogin ? (
            <Login onSwitchToRegister={() => setIsLogin(false)} />
          ) : (
            <Register onSwitchToLogin={() => setIsLogin(true)} />
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default App
