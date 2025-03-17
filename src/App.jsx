import {
  BrowserRouter as Router,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import HomePage from "./HomePage";
// import AdminDashboard from "./AdminDashboard";
// import UserProfile from "./UserProfile";
// import Unauthorized from "./Unauthorized";
// import ProtectedRoute from "./routes";
import SideBar from "./components/Navigation";
import Login from "./pages/login";
import Dashboard from "./pages/Dashboard";
import AuditLogs from "./pages/Audit";
import BookAppointment from "./pages/Appointment";
import UserProfile from "./pages/Profile";
import UserGoalSetting from "./pages/Goals";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <SideBar />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "audit-logs",
        element: <AuditLogs />,
      },
      {
        path: "book-appointment",
        element: <BookAppointment />,
      },
      {
        path: "profile",
        element: <UserProfile />,
      },
      {
        path: "goals",
        element: <UserGoalSetting />,
      },
    ],
  },
]);

function App() {
  const userRole = "user";

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
