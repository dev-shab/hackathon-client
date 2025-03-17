import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  useNavigate,
} from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import NavBar from "./NavBar";
import Login from "../pages/login";

const drawerWidth = 240;

const SideBar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(true);
  const pages = [
    {
      name: "Dashboard",
      path: "/dashboard",
    },
    {
      name: "Profile",
      path: "/profile",
    },
    {
      name: "Fitness Goals",
      path: "/goals",
    },
    {
      name: "Book Appointment",
      path: "/book-appointment",
    },
    {
      name: "Audit Logs",
      path: "/audit-logs",
    },
  ];
  return (
    <Box sx={{ display: "flex" }}>
      <NavBar toggleSidebar={setOpen} />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <Toolbar />
        <Divider />
        <List>
          {pages.map(({ name, path }) => (
            <ListItem key={name} disablePadding>
              <ListItemButton onClick={() => navigate(path)}>
                <ListItemText primary={name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
      </Box>
      <>
        {/* Public Routes */}
        {/* <Route path="/" element={<HomePage />} /> */}

        {/* Protected Routes */}
        {/* <Route
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
        /> */}

        <Outlet />

        {/* Unauthorized Route */}
        {/* <Route path="/unauthorized" element={<Unauthorized />} /> */}
        {/* <div className="text-3xl">
          <Navigation />
        </div> */}
      </>
    </Box>
  );
};

export default SideBar;
