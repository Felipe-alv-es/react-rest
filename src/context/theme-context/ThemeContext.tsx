// themeContext.tsx
import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useEffect,
  ReactNode,
} from "react";
import { createTheme, ThemeProvider, Theme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

interface ThemeContextData {
  toggleColorMode: () => void;
  mode: "light" | "dark";
}

const ThemeContext = createContext<ThemeContextData | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const CustomThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
}) => {
  // Detectar preferência do sistema
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  // Estado do tema, inicializando do localStorage ou do sistema
  const [mode, setMode] = useState<"light" | "dark">(() => {
    const saved = localStorage.getItem("themeMode");
    return (saved as "light" | "dark") || (prefersDarkMode ? "dark" : "light");
  });

  // Atualizar localStorage quando o tema mudar
  useEffect(() => {
    localStorage.setItem("themeMode", mode);
  }, [mode]);

  // Alternar tema
  const toggleColorMode = useMemo(
    () => () => {
      setMode((prev) => (prev === "light" ? "dark" : "light"));
    },
    []
  );

  // Criar o tema MUI memoizado
  const theme: Theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={{ toggleColorMode, mode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useCustomTheme = (): ThemeContextData => {
  const context = useContext(ThemeContext);
  if (!context)
    throw new Error("useCustomTheme must be used within CustomThemeProvider");
  return context;
};
