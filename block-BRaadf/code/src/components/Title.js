import {useContext} from "react";
import { ThemeContext } from "../context/ThemeContext";

function Title({ text}) {

  let theme = useContext(ThemeContext);
  let isDarkMode = theme.data.isDarkMode;
  return (
    <h2
      className={`heading ${
        isDarkMode ? "sub-heading-dark" : "sub-heading-light"
      }`}
    >
      {text}
    </h2>
  );
}

export default Title;
