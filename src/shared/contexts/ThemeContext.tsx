import { ThemeProvider } from "@emotion/react";
import { LightTheme, DarkTheme } from "../themes";
import { useCallback, useMemo, useState, useContext, createContext } from "react";
import { Box } from "@mui/system";

interface IThemeContextDate {
    themeName: 'light' | 'dark';
    toggleTheme: () => void;
}

const ThemeContext = createContext({} as IThemeContextDate)

export const useAppThemeContext = () => {
    return useContext(ThemeContext);
}
interface EventProviderProps {
    children: React.ReactNode
}

export function AppThemeProvider ( {children}: EventProviderProps){
  const [themeName, setThemeName] = useState<'light' | 'dark'>('light');

  const toggleTheme = useCallback(() => {
    setThemeName(oldThemeName => oldThemeName === 'light' ? 'dark' : 'light');
  }, []);

  const theme = useMemo(() => {
    if (themeName === 'light') return LightTheme;

    return DarkTheme;
  }, [themeName]);


  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <Box width="100vw" height="100vh" bgcolor={theme.palette.background.default}>
          {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}