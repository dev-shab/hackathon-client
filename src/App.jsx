import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HomePage from "./HomePage";
// import AdminDashboard from "./AdminDashboard";
// import UserProfile from "./UserProfile";
// import Unauthorized from "./Unauthorized";
// import ProtectedRoute from "./routes";
import SideBar from "./components/Navigation";

function App() {
  const userRole = "user";

  return <SideBar />;
}

export default App;
