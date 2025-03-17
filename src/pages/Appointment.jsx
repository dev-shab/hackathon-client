import React, { useState } from 'react';
import axios from 'axios';

function BookAppointment() {
  const [formData, setFormData] = useState({ service: '', date: '', time: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/appointments', formData);
      alert('Appointment booked successfully!');
    } catch (error) {
      alert('Error booking appointment');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Service:</label>
      <select name="service" onChange={handleChange} required>
        <option value="">Select a service</option>
        <option value="Blood Test">Blood Test</option>
        <option value="Cholesterol Check">Cholesterol Check</option>
      </select>
      <label>Date:</label>
      <input type="date" name="date" onChange={handleChange} required />
      <label>Time:</label>
      <input type="time" name="time" onChange={handleChange} required />
      <button type="submit">Book Appointment</button>
    </form>
  );
}

export default BookAppointment;
