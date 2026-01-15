/* Это «двигатель», он вычисляет начальное состояние и следит за его обновлением. */
import {type FC, type ReactNode, useMemo, useState, useEffect } from 'react';
import { Theme, LOCAL_STORAGE_THEME_KEY } from './Theme';
import { ThemeContext } from './ThemeContext';

interface ThemeProviderProps {
  children: ReactNode;
  initialTheme?: Theme;
}

// Инициализация вынесена из компонента для чистоты
const fallbackTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme
  || (window.matchMedia('(prefers-color-scheme: dark)').matches ? Theme.DARK : Theme.LIGHT);

export const ThemeProvider: FC<ThemeProviderProps> = ({ children, initialTheme }) => {
  const [theme, setTheme] = useState<Theme>(initialTheme || fallbackTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
  }, [theme]);

  // Мемоизируем значение, чтобы не было лишних рендеров
  const defaultProps = useMemo(() => ({
    theme,
    setTheme,
  }), [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};
