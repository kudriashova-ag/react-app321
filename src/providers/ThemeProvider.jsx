import React, { useEffect, useState } from 'react';
import { ThemeContext } from '../contexts/themeContext';

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("light");
    
    const toggleTheme = () => setTheme( theme === 'light' ? 'dark' : 'light' ) 

    useEffect(() => { 
        setTheme( localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light' )
    }, []);

    useEffect(() => {
        localStorage.setItem('theme', theme)
    }, [theme]);

    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    );
}

export default ThemeProvider;
