import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'

// Layouts
import OuterLayout from './layouts/OuterLayout'

// Routes
import ProtectedRoutes from './routes/ProtectedRoutes'

// Pages
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import NotFound from './pages/NotFound'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public routes with OuterLayout */}
          <Route element={<OuterLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Home />} />
          </Route>

          {/* Protected routes with InnerLayout */}
          <Route element={<ProtectedRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
            {/* Add more protected routes here */}
          </Route>

          {/* 404 route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
