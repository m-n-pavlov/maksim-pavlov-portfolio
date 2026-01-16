import { createContext } from 'react';
import { Theme } from './Theme';

/**
 * Описываем форму данных
 * - не используем опциональные поля, для более строгой проверки
 */
export interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

/**
 * Создаём контекст
 * - начальное значение undefined позволяет позже в хуке
 *   проверить, обернуто ли приложение в Provider
 */
export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);
