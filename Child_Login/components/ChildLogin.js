import React, { useContext, useState } from "react";
import ChildLoginForm from "./ChildLoginForm";
import { AuthContext } from "../context/AuthContext";

const ChildLogin = () => {
  const { setAuthUser } = useContext(AuthContext);
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState(null); // "success" or "error"

  const handleLoginSuccess = (userData) => {
    setAuthUser(userData);
    setMessageType("success");
    setMessage("Login successful! Redirecting...");
    setTimeout(() => {
      window.location.href = "http://localhost:3007"; // Redirect after login
    }, 1500);
  };

  const handleLoginError = () => {
    setMessageType("error");
    setMessage("Invalid username or password. Please try again.");
    setTimeout(() => {
      setMessage(null);
      setMessageType(null);
    }, 3000);
  };

  return (
    <div style={{ padding: "2rem" }}>
      {message && (
        <div
          style={{
            marginBottom: "1rem",
            padding: "10px",
            borderRadius: "5px",
            color: messageType === "success" ? "green" : "red",
            border: `1px solid ${messageType === "success" ? "green" : "red"}`,
            fontWeight: "bold",
          }}
        >
          {message}
        </div>
      )}
      <ChildLoginForm
        onLoginSuccess={handleLoginSuccess}
        onLoginError={handleLoginError}
      />
    </div>
  );
};

export default ChildLogin;
