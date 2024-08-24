import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const getSystemPreference = () => {
    if (window.matchMedia) {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  };

  const [darkMode, setDarkMode] = useState(() => {
    // const savedTheme = localStorage.getItem("darkMode");
    // if (savedTheme !== null) {
      // return savedTheme === "true";
    // }
    // return getSystemPreference();
    return true;
  });

  useEffect(() => {
    // localStorage.setItem("darkMode", darkMode);
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
