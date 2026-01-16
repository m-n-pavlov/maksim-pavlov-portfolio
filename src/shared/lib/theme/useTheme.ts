import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { Theme } from './Theme';

/**
 * Кастомный хук для работы с темой приложения
 * - обеспечивает безопасный доступ к контексту
 * - инкапсулирует логику переключения темы (toggle)
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);

  /**
   * Защитная проверка (Guard Clause)
   * - если хук вызван вне ThemeProvider, выбрасываем исключение
   * - это помогает отловить ошибки архитектуры на этапе разработки
   */
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  const { theme, setTheme } = context;

  /**
   * Функция для циклического переключения темы
   * - избавляет компоненты от лишней логики сравнения
   */
  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    setTheme(newTheme);
  };

  return {
    theme,
    toggleTheme,
  };
};
