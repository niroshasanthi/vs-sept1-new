import React, { createContext, useState, useEffect } from "react";
import apiClient from "../api/api";

export const AuthContext = createContext({
  authUser: null,
  setAuthUser: () => {},
  fetchAuthUser: () => {},
});

export const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);

  // Example: fetch authenticated child profile on app load
  const fetchAuthUser = async () => {
    try {
      const response = await apiClient.get("/child-dashboard/children");
      if (response.status === 200 && response.data.length > 0) {
        setAuthUser(response.data[0]); // store first child's info as authUser
      } else {
        setAuthUser(null);
      }
    } catch {
      setAuthUser(null);
    }
  };

  useEffect(() => {
    fetchAuthUser();
  }, []);

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser, fetchAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};
