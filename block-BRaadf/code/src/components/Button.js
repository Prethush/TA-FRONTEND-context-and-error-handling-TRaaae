import React from "react";
import {useContext} from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function SwitchButton() {
  let theme = useContext(ThemeContext);
  console.log(theme);
  let {isDarkMode} = theme.data;
  return (
    <button
      className={`btn ${isDarkMode ? "btn-dark" : "btn-light"}`}
      onClick={theme.changeMode}
    >
      {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
}
