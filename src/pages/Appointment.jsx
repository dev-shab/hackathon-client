import React, { useState } from "react";
import axios from "axios";

function BookAppointment() {
  const [formData, setFormData] = useState({ service: "", date: "", time: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/appointments", formData);
      alert("Appointment booked successfully!");
    } catch (error) {
      alert("Error booking appointment");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-100 mr-150 center">
      <div className="flex flex-col gap-4 border p-8 rounded-2xl">
        <div>
          <label>Service:</label>
          <select name="service" onChange={handleChange} required>
            <option value="">Select a service</option>
            <option value="Blood Test">Blood Test</option>
            <option value="Cholesterol Check">Cholesterol Check</option>
          </select>
        </div>
        <div>
          <label>Date:</label>
          <input type="date" name="date" onChange={handleChange} required />
        </div>
        <div>
          <label>Time:</label>
          <input type="time" name="time" onChange={handleChange} required />
        </div>
        <button className="bg-blue-300 rounded-2xl" type="submit">
          Book Appointment
        </button>
      </div>
    </form>
  );
}

export default BookAppointment;
