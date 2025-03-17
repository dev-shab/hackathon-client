import React, { useEffect, useState } from "react";
import axios from "axios";

const Protected = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      axios
        .get("http://localhost:3000/protected", { headers: { Authorization: token } })
        .then(response => setMessage(response.data.message))
        .catch(() => setMessage("Access denied!"));
    } else {
      setMessage("No token found. Please login.");
    }
  }, []);

  return <p>{message}</p>;
};

export default Protected;
