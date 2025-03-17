import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Navbar({ userId }) {
  const [userRole, setUserRole] = useState('');

  useEffect(() => {
    // Fetch user role from backend
    const fetchUserRole = async () => {
      try {
        const response = await axios.get(`/api/user/${userId}`);
        setUserRole(response.data.role);
      } catch (error) {
        console.error('Error fetching user role:', error);
      }
    };
    fetchUserRole();
  }, [userId]);

  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        {userRole === 'admin' && (
          <>
            <li><a href="/admin/dashboard">Admin Dashboard</a></li>
            <li><a href="/manage/users">Manage Users</a></li>
          </>
        )}
        {userRole === 'user' && (
          <>
            <li><a href="/profile">Profile</a></li>
            <li><a href="/appointments">My Appointments</a></li>
          </>
        )}
        <li><a href="/logout">Logout</a></li>
      </ul>
    </nav>
  );
}

const styles = {
  navbar: {
    backgroundColor: '#333',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'center'
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    gap: '1rem',
    margin: 0,
    padding: 0
  }
};

export default Navbar;
