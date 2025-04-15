import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import ThemeProvider from './components/common/ThemeProvider'

// Layouts
import OuterLayout from './layouts/OuterLayout'

// Routes
import ProtectedRoutes from './routes/ProtectedRoutes'

// Pages
import Home from './pages/Home'
import NotFound from './pages/NotFound'

// Auth Pages
import Login from './pages/auth/Login.jsx'
import Register from './pages/auth/Register.jsx'
import ForgotPassword from './pages/auth/ForgotPassword.jsx'

// Dashboard Pages
import Dashboard from './pages/dashboard/Dashboard.jsx'
import Reports from './pages/dashboard/Reports.jsx'
import Settings from './pages/dashboard/Settings.jsx'

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <Routes>
          {/* Public routes with OuterLayout */}
          <Route element={<OuterLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/" element={<Home />} />
          </Route>

          {/* Protected routes with InnerLayout */}
          <Route element={<ProtectedRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/reports" element={<Reports />} />
            <Route path="/dashboard/settings" element={<Settings />} />
            {/* Add more protected routes here */}
          </Route>

          {/* 404 route */}
          <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
