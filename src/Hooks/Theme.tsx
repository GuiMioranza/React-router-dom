import { useContext, createContext, useMemo } from 'react'
import { usePersistentState } from '../Utils/usePersistentState'

interface ThemeContextData {
  theme: 'light' | 'dark';
  setLightTheme: () => void;
  setDarkTheme: () => void;
}

interface ThemeProviderProps {
  children: React.ReactNode;
}

// "Reservamos" o context na nossa aplicação
const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

const themeKey = '@Turma736:theme'

// Preenchemos as informações do nosso contexto
export function ThemeProvider ({ children }: ThemeProviderProps ) {
  const [theme, setTheme] = usePersistentState<'light' | 'dark'>(
    themeKey,
    'light'
  )

  function saveTheme(newTheme: 'light' | 'dark') {
    localStorage.setItem(themeKey, newTheme);
  }

  function setLightTheme() {
    setTheme('light');
    saveTheme('light');
  }

  function setDarkTheme() {
    setTheme('dark');
    saveTheme('dark');
  }

  const themeData = useMemo(
    () => ({
      theme: theme,
      setLightTheme,
      setDarkTheme,
    }),
    [theme]
  )

  return (
    <ThemeContext.Provider value={themeData}> {children} </ThemeContext.Provider>
  )
}

export function useTheme(): ThemeContextData {
  const context = useContext(ThemeContext);
  return context;
}