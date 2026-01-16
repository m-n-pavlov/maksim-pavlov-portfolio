import clsx from 'clsx'; // импорт библиотеки clsx
import s from './Logo.module.scss'; // стили компонента

/**
 * Интерфейс настроек компонента
 * - проп className опциональный, так как компонент может использоваться в другом месте
 */
interface LogoProps {
  className?: string;
}

/**
 * Компонент логотипа с анимацией курсора
 * @param className - CSS-класс для позиционирования
 */
export const Logo = ({ className }: LogoProps) => {
  return (
    <a
      href="/"
      className={clsx(s.logo, className)}
      aria-label="На главную страницу"
    >
      M.PAVLOV
      <span className={s.cursor} aria-hidden="true">_</span>
    </a>
  );
};
