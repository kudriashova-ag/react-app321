import React, { useContext } from 'react';
import "./Header.css"
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { ThemeContext } from '../../contexts/themeContext';

const Header = () => {

    const { theme, toggleTheme } = useContext(ThemeContext);


    return (
      <div className={`container ${theme}-theme`}>
        <div>logo</div>

        <div onClick={toggleTheme}>
          {theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}{" "}
        </div>
      </div>
    );
}

export default Header;
