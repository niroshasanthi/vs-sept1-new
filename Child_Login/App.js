import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChildLogin from "./components/ChildLogin";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ChildLogin />} />
          <Route path="/child/login" element={<ChildLogin />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
