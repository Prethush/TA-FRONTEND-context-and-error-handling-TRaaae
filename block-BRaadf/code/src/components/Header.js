import {useContext} from "react";
import { ThemeContext } from "../context/ThemeContext";
function Header() {

  let theme = useContext(ThemeContext);
  let isDarkMode = theme.data.isDarkMode;
  console.log(theme.data, "darkMode");
  return (
    <h1 className={`heading ${isDarkMode ? "heading-dark" : "heading-light"}`}>
      {isDarkMode ? "Dark Mode" : "Light Mode"}
    </h1>
  );
}

export default Header;
