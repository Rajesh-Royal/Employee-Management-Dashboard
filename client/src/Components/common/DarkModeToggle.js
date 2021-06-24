import React, { useEffect, useState } from "react";
import { Moon, Sun } from "react-feather";

const DarkModeToggle = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (
      localStorage.emp_theme === "dark" ||
      (!("emp_Theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setDark(true);
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const setDarkMode = () => {
    dark
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  };

  useEffect(() => {
    dark ? (localStorage.emp_theme = "dark") : (localStorage.emp_theme = "light");
  }, [dark]);

  return (
    <button
      type="button"
      className="focus:outline-none"
      onClick={() => {
        setDark(!dark);
        setDarkMode();
      }}
      aria-label="Toggle color mode">
      {localStorage.emp_theme === "dark" ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
    </button>
  );
};

export default DarkModeToggle;
