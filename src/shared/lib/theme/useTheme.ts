/* Теперь хук не создает свой стейт, а просто берет данные из контекста и предоставляет удобный метод toggleTheme. */
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { Theme } from './Theme';

export const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    setTheme?.(newTheme);
  };

  return {
    theme: theme || Theme.LIGHT,
    toggleTheme
  };
};
