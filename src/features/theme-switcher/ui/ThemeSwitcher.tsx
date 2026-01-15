import { useTheme, Theme } from '@/shared/lib/theme';
import clsx from 'clsx';
import s from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={clsx(s.switcher, className)}
      // Динамический лейбл — это +10 к доступности (A11y)
      aria-label={`Переключить на ${theme === Theme.LIGHT ? 'темную' : 'светлую'} тему`}
    >
      <span aria-hidden="true">
        {theme === Theme.LIGHT ? '🌙' : '☀️'}
      </span>
    </button>
  );
};
