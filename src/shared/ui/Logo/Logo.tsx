import clsx from 'clsx'; // импорт библиотеки clsx
import s from './Logo.module.scss'; // стили компонента
import { Link } from 'react-router-dom'; // импорт компонента Link для навигации без перезагрузки

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
    <Link
      to={import.meta.env.BASE_URL} // import.meta.env.BASE_URL возьмет путь из vite.config ( /maksim-pavlov-portfolio/ )
      className={clsx(s.logo, className)}
      aria-label="На главную страницу"
    >
      M.PAVLOV
      <span className={s.cursor} aria-hidden="true">_</span>
    </Link>
  );
};
