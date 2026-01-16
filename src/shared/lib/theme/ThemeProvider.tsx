import { type FC, type ReactNode, useMemo, useState, useEffect } from 'react';
import { Theme, LOCAL_STORAGE_THEME_KEY } from './Theme';
import { ThemeContext } from './ThemeContext';

interface ThemeProviderProps {
  children: ReactNode;
  initialTheme?: Theme;
}

/**
 * Логика определения темы по умолчанию
 * Этап 1: localStorage.getItem - уважаем прошлый выбор пользователя (сохранение состояния)
 * Этап 2: window.matchMedia — если выбора нет, подстраиваемся под экосистему пользователя (тема ОС)
 * Этап 3: Theme.LIGHT — безопасный дефолт, если всё остальное недоступно
 */
const fallbackTheme = (typeof window !== 'undefined' && localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme)
  || (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches ? Theme.DARK : Theme.LIGHT)
  || Theme.LIGHT;

export const ThemeProvider: FC<ThemeProviderProps> = ({ children, initialTheme }) => {
  const [theme, setTheme] = useState<Theme>(initialTheme || fallbackTheme);

  /**
   * Синхронизация состояния темы с DOM и локальным хранилищем
   * - data-theme позволяет удобно управлять стилями через CSS-переменные
   */
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
  }, [theme]);

  /**
   * Оптимизация производительности
   * - обновляем объект контекста только при смене темы
   * - это предотвращает лишние перерисовки всех дочерних компонентов
   */
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
