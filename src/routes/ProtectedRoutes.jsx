import React from 'react';
import { Navigate } from 'react-router-dom';
import InnerLayout from '../layouts/InnerLayout';
import { useAuth } from '../context/AuthContext';

// This component will check if the user is authenticated
// If authenticated, it renders the InnerLayout with the child routes
// If not authenticated, it redirects to the login page
const ProtectedRoutes = () => {
  // Get authentication state from context
  const { isAuthenticated } = useAuth();

  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // If authenticated, render the InnerLayout with child routes
  return <InnerLayout />;
};

export default ProtectedRoutes;
