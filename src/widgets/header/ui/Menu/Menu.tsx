import React, { useCallback } from "react";
import { MENU_ITEMS } from '../../model/consts';
import s from './Menu.module.scss';
import clsx from "clsx";

/** Интерфейс настроек компонента */
interface MenuProps {
  variant?: 'desktopMenu' | 'mobileMenu';
  className?: string; // опциональный проп, так как компонент может использоваться в другом месте
  onItemClick?: () => void; // колбэк для связи с состоянием родителя MobileMenu
}

/** Компонент списка меню */
export const Menu = ({ variant = 'desktopMenu', onItemClick, className }: MenuProps) => {

  /** Универсальный мемоизированный обработчик клика по навигации */
  const handleItemClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();

      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);

      /** 1. Сначала закрываем меню, чтобы сработал анлок скролла */
      onItemClick?.();

      if (element) {
        /** * 2. Оборачиваем в setTimeout, чтобы скролл начался
         * ПОСЛЕ того, как React вернет body стиль overflow: visible
         */
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });

          /** Сохраняем хэш только после начала движения */
          window.history.pushState(null, '', href);
        }, 0);
      }
    } else {
      onItemClick?.();
    }
  }, [onItemClick]);

  return (
    <nav className={clsx(s[variant], className)}>
      <ul className={s.menuList}>
        {MENU_ITEMS.map(({href, label}) => (
          <li key={href}>
            <a
              href={href}
              className={s.link}
              onClick={(e) => handleItemClick(e, href)}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
