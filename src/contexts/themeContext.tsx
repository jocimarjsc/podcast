import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface ThemeMode {
    isDark: boolean;
    toggleTheme: () => void;
}

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeContext = createContext({} as ThemeMode);

export function ThemeContextPovider({ children }: ThemeProviderProps) {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const convertIsDark = localStorage.getItem("isDark");
        if (convertIsDark === null) {
            setIsDark(false)
            localStorage.setItem("isDark", "false")
        }
        setIsDark(JSON.parse(convertIsDark))
        console.log(JSON.parse(convertIsDark))
    }, [isDark]);

    function toggleTheme() {
        if (isDark === true) {
            setIsDark(false);
            localStorage.setItem("isDark", "false");
        } else {
            setIsDark(true);
            localStorage.setItem("isDark", "true");
        }
    }

    return (
        <ThemeContext.Provider
            value={{
                isDark,
                toggleTheme
            }}>
            {children}
        </ThemeContext.Provider>
    )
};

export const useTheme = () => {
    return useContext(ThemeContext);
}