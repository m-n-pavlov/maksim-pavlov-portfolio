import { useTheme, Theme } from '@/shared/lib/theme';
import clsx from 'clsx';
import s from './ThemeSwitcher.module.scss';
import { UIIcons } from '@/shared/assets/icons';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();
  const Icon = theme === Theme.LIGHT ? UIIcons.DarkTheme : UIIcons.LightTheme;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={clsx(s.switcher, className)}
      aria-label={`Переключить на ${theme === Theme.LIGHT ? 'темную' : 'светлую'} тему`}
    >
      <span aria-hidden="true" className={s.themeContainer}>
        <Icon className={s.icon} />
      </span>
    </button>
  );
};
