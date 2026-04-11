import { createContext, useContext, useState } from "react";

const USERS_KEY = "figura_users";
const SESSION_KEY = "figura_session";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const raw = localStorage.getItem(SESSION_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  });

  function getUsers() {
    try {
      return JSON.parse(localStorage.getItem(USERS_KEY)) ?? [];
    } catch {
      return [];
    }
  }

  function register(firstName, lastName, email, password) {
    const users = getUsers();
    const exists = users.some(
      (u) => u.email.toLowerCase() === email.toLowerCase()
    );
    if (exists) {
      return { ok: false, message: "An account with this email already exists." };
    }
    const user = { id: Date.now(), firstName, lastName, email, password };
    localStorage.setItem(USERS_KEY, JSON.stringify([...users, user]));
    const session = { id: user.id, firstName, lastName, email };
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    setCurrentUser(session);
    return { ok: true };
  }

  function login(email, password) {
    const users = getUsers();
    const user = users.find(
      (u) =>
        u.email.toLowerCase() === email.toLowerCase() &&
        u.password === password
    );
    if (!user) {
      return { ok: false, message: "Invalid email or password." };
    }
    const session = { id: user.id, firstName: user.firstName, lastName: user.lastName, email: user.email };
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    setCurrentUser(session);
    return { ok: true };
  }

  function logout() {
    localStorage.removeItem(SESSION_KEY);
    setCurrentUser(null);
  }

  return (
    <AuthContext.Provider value={{ currentUser, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
