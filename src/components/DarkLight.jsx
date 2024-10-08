import React, { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const DarkLight = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [rotating, setRotating] = useState(false);

  const handleThemeToggle = () => {
    setRotating(true);

    setDarkMode((prevMode) => !prevMode);
    setTimeout(() => {
      setRotating(false);
    }, 500);
  };

  return (
    <div
      onClick={handleThemeToggle}
      className="flex h-8 w-8 xm:scale-75 cursor-pointer items-center justify-center"
    >
      <svg
        className={`icon ${rotating ? "rotate" : ""} ${darkMode ? "hidden" : ""}`}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 18.5C15.5899 18.5 18.5 15.5899 18.5 12C18.5 8.41015 15.5899 5.5 12 5.5C8.41015 5.5 5.5 8.41015 5.5 12C5.5 15.5899 8.41015 18.5 12 18.5Z"
          stroke="#292D32"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          opacity="0.4"
          d="M19.14 19.14L19.01 19.01M19.01 4.99L19.14 4.86L19.01 4.99ZM4.86 19.14L4.99 19.01L4.86 19.14ZM12 2.08V2V2.08ZM12 22V21.92V22ZM2.08 12H2H2.08ZM22 12H21.92H22ZM4.99 4.99L4.86 4.86L4.99 4.99Z"
          stroke="#292D32"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <svg
        className={`icon ${rotating ? "rotate" : ""} ${!darkMode ? "hidden" : ""}`}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.99995 19C8.99995 19.84 9.12995 20.66 9.36995 21.42C5.52995 20.09 2.62995 16.56 2.32995 12.43C2.02995 8.03999 4.55995 3.93999 8.64995 2.21999C9.70995 1.77999 10.25 2.09999 10.48 2.32999C10.7 2.54999 11.01 3.07999 10.57 4.08999C10.12 5.12999 9.89995 6.22999 9.89995 7.36999C9.90995 9.40999 10.71 11.3 12.01 12.75C10.18 14.21 8.99995 16.47 8.99995 19Z"
          fill="#f2f2f2"
        />
        <path
          opacity="0.4"
          d="M21.21 17.72C19.23 20.41 16.09 21.99 12.74 21.99C12.58 21.99 12.42 21.98 12.26 21.97C11.26 21.93 10.29 21.74 9.37 21.42C9.13 20.66 9 19.84 9 19C9 16.47 10.18 14.21 12.01 12.75C13.48 14.4 15.59 15.47 17.92 15.57C18.55 15.6 19.18 15.55 19.8 15.44C20.92 15.24 21.37 15.66 21.53 15.93C21.7 16.2 21.88 16.79 21.21 17.72Z"
          fill="#f2f2f2"
        />
      </svg>
    </div>
  );
};

export default DarkLight;
