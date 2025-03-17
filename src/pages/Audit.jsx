import React, { useEffect, useState } from "react";
import axios from "axios";

const AuditLogs = () => {
  const [logs, setLogs] = useState([]);
  const [filters, setFilters] = useState({
    userId: "",
    action: "",
    startDate: "",
    endDate: ""
  });

  const fetchLogs = async () => {
    try {
      const response = await axios.get("http://localhost:3000/audit-logs", { params: filters });
      setLogs(response.data);
    } catch (error) {
      console.error("Error fetching audit logs:", error);
    }
  };

  useEffect(() => {
    fetchLogs(); // Fetch logs when the component loads
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleApplyFilters = () => {
    fetchLogs(); // Fetch logs based on the updated filters
  };

  return (
    <div>
      <h2>Audit Logs</h2>

      {/* Filter Section */}
      <div>
        <input
          type="text"
          name="userId"
          placeholder="User ID"
          value={filters.userId}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="action"
          placeholder="Action"
          value={filters.action}
          onChange={handleFilterChange}
        />
        <input
          type="date"
          name="startDate"
          value={filters.startDate}
          onChange={handleFilterChange}
        />
        <input
          type="date"
          name="endDate"
          value={filters.endDate}
          onChange={handleFilterChange}
        />
        <button onClick={handleApplyFilters}>Apply Filters</button>
      </div>

      {/* Logs Table */}
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Action</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, index) => (
            <tr key={index}>
              <td>{log.userId}</td>
              <td>{log.action}</td>
              <td>{new Date(log.timestamp).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AuditLogs;
