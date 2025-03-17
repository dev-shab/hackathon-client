import React, { useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [role, setRole] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:3000/login", {
        email,
        password,
        role,
      });
      localStorage.setItem("token", response.data.token);
      setMessage("Login successful!");
    } catch (error) {
      setMessage("Login failed!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center my-auto h-screen">
      <h2 className="text-3xl py-8">Login</h2>
      <TextField
        sx={{ marginBottom: "2rem" }}
        id="outlined-basic"
        label="Email"
        variant="outlined"
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <TextField
        sx={{ marginBottom: "2rem" }}
        id="outlined-basic"
        label="Password"
        variant="outlined"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <div className="flex items-center justify-center gap-2">
        <Button variant="contained" onClick={() => setRole("patient")}>
          Login as Patient
        </Button>
        <Button variant="contained" onClick={() => setRole("provider")}>
          Login as provider
        </Button>
      </div>
      <p>{message}</p>
    </div>
  );
};

export default Login;
