import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import AdminDashboard from './AdminDashboard';
import UserProfile from './UserProfile';
import Unauthorized from './Unauthorized';
import ProtectedRoute from './ProtectedRoute';

function App() {
  const userRole = 'user'; // Mocked role; replace with actual role from authentication logic

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />

        {/* Protected Routes */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute userRole={userRole} requiredRole="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute userRole={userRole} requiredRole="user">
              <UserProfile />
            </ProtectedRoute>
          }
        />

        {/* Unauthorized Route */}
        <Route path="/unauthorized" element={<Unauthorized />} />
      </Routes>
    </Router>
  );
}

export default App;
