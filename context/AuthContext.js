"use client";
// OWNER: Sakshi — Issue #10 (Login context)
// Keeps track of who is logged in. There is no real backend,
// so any email + password is accepted (fake login).

import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  // null means nobody is logged in
  const [user, setUser] = useState(null);

  function login(email, password) {
    if (email === "" || password === "") {
      return false; // login failed
    }
    const name = email.split("@")[0]; // "sakshi@gmail.com" -> "sakshi"
    setUser({ name: name, email: email, college: "Sahyadri College" });
    return true; // login worked
  }

  function register(name, email, college) {
    setUser({ name: name, email: email, college: college });
  }

  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
