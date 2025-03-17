import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ role, requiredRole, children }) {
  if (role !== requiredRole) {
    return <Navigate to="/public" />;
  }
  return children;
}

export default ProtectedRoute;
