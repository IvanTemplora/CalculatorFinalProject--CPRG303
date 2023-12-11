import React, { createContext, useState } from "react";
import { themes } from "../themes/themes";  // import themes

export const ThemeContext = createContext(); // create context


export const ThemeProvider = ({ children }) => {
    const[theme, setTheme] = useState(themes.light); // set default theme

    const toggleTheme = () => {
        setTheme(currentTheme => currentTheme === themes.dark ? themes.light : themes.dark);
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
