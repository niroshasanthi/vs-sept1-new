import React, { useState } from "react";
import { loginChild } from "../api/api";

const ChildLoginForm = ({ onLoginSuccess, onLoginError }) => {
  const [formData, setFormData] = useState({ name: "", password: "" });
  const [error, setError] = useState(null);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const response = await loginChild(formData);
      if (response.status === 200) {
        onLoginSuccess({ name: formData.name });
      } else {
        onLoginError();
      }
    } catch {
      onLoginError();
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: "auto" }}>
      <h2>Child Login</h2>
      {error && <div style={{ color: "red" }}>{error}</div>}

      <div style={{ marginBottom: 12 }}>
        <label>Name</label>
        <input
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          required
          autoFocus
          style={{ width: "100%", padding: 8, marginTop: 4 }}
        />
      </div>

      <div style={{ marginBottom: 12 }}>
        <label>Password</label>
        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          required
          minLength={6}
          style={{ width: "100%", padding: 8, marginTop: 4 }}
        />
      </div>

      <button
        type="submit"
        style={{
          padding: 10,
          width: "100%",
          backgroundColor: "#d00",
          color: "white",
          border: "none",
          borderRadius: 4,
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Login
      </button>
    </form>
  );
};

export default ChildLoginForm;
