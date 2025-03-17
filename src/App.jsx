import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import AdminDashboard from './AdminDashboard';
import UserProfile from './UserProfile';
import Unauthorized from './Unauthorized';
import ProtectedRoute from './routes';

function App() {
  const userRole = 'user';

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
        <div className="text-3xl">
          <Navigation />
        </div>
      </Routes>
    </Router>

  );
}

export default App;
