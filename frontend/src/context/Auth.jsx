/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState(() => {
    const storedData = localStorage.getItem("user");
    return storedData ? JSON.parse(storedData) : null;
  });

  const updateAuthdata = (newData) => {
    setAuthData(newData);
    localStorage.setItem("user", JSON.stringify(newData));
  };
  return (
    <AuthContext.Provider value={{ authData, updateAuthdata }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
