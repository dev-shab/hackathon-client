import jwtDecode from 'jwt-decode';

const token = localStorage.getItem('token'); // Assuming token is saved here
const userRole = token ? jwtDecode(token).role : null;

// Conditional Menu Rendering
const menu = userRole === 'admin' ? ['Dashboard', 'Manage Users'] : ['Profile', 'My Appointments'];
