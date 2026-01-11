import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Login from './components/Login'
import Register from './components/Register'
import ThemeToggle from './components/ThemeToggle'
import './App.css'

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/login" element={
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="w-full"
          >
            <Login />
          </motion.div>
        } />
        <Route path="/register" element={
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="w-full"
          >
            <Register />
          </motion.div>
        } />
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen w-full overflow-hidden relative bg-background transition-colors duration-300">
        {/* Theme Toggle */}
        <ThemeToggle />
        
        {/* Main content */}
        <div className="relative z-10 min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 py-8 sm:py-12">
          <AnimatedRoutes />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
