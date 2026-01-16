/** Импорт нативных хуков React */
import { useState, useLayoutEffect, useEffect, useRef, useCallback } from 'react';

/** Импорт кастомного хука для блокировки прокрутки страницы */
import { useLockedBody } from "@/shared/lib/hooks/useLockedBody";

/** Импорт дочерних компонентов */
import { Logo } from "@/shared/ui";
import { BurgerButton } from '@/shared/ui';
import { ThemeSwitcher } from "@/features/theme-switcher";
import { Menu } from '../Menu/Menu';
import { MobileMenu } from "../MobileMenu/MobileMenu";

/** Импорт стилей */
import s from './Header.module.scss';

/**
 * Главный компонент Header
 * - является управляющим центром: связывает стейт, хук и компоненты
 * - инкапсулирует логику адаптивности, пробрасывая className дочерним компонентам
 * - реализует блокировку скролла при открытом меню
 */
export const Header = () => {

  /** Реф для управления фокусом на кнопке бургер-меню */
  const burgerRef = useRef<HTMLButtonElement>(null);

  /** Состояние мобильного меню */
  const [isMenuOpen, setIsMenuOpen] = useState(false); // по умолчанию меню закрыто

  /** Вызываем хук для блокировки прокрутки страницы и передаем ему состояние меню */
  useLockedBody(isMenuOpen);

  /**
   * Управление доступностью (Focus Trap) и горячими клавишами
   * - атрибут 'inert' на корневом элементе блокирует фокус и взаимодействие со всем
   *   контентом страницы, кроме портала с меню
   * - подписка на 'keydown' позволяет закрывать меню по кнопке Escape
   * - в зависимостях - состояние мобильного меню
   */
  useEffect(() => {
    /** Находим корневой элемент */
    const root = document.getElementById('root');

    /** Обработчик закрытия по нажатию Escape */
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
        burgerRef.current?.focus(); // при закрытии по Escape возвращаем фокус на кнопку
      }
    };

    /** Управление доступностью страницы и слушателями при открытии меню */
    if (isMenuOpen) {
      root?.setAttribute('inert', ''); // делаем основной контент "инертным"
      window.addEventListener('keydown', handleEsc);
    } else {
      root?.removeAttribute('inert');
      // Явно удаляем слушатель, когда меню закрыто
      window.removeEventListener('keydown', handleEsc);
    }

    /** Гарантированная очистка при закрытии меню или размонтировании хедера */
    return () => {
      root?.removeAttribute('inert');
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isMenuOpen]);

  /**
   * Оптимизированное отслеживание размера экрана
   * - используем matchMedia вместо события 'resize', так как оно срабатывает только
   *   в момент пересечения брейкпоинта, что лучше для производительности
   * - автоматически закрывает мобильное меню, если экран стал 769 пикселей или больше
   */
  useLayoutEffect(() => {
    /** Создаем медиа-запрос для десктопного порога */
    const mediaQuery = window.matchMedia('(min-width: 768px)');

    /** Принудительно проверяем текущее состояние экрана сразу при загрузке */
    if (mediaQuery.matches) {
      setIsMenuOpen(false);
    }

    /** Обработчик: закрываем меню, если экран стал >= 768px */
    const handleMediaChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setIsMenuOpen(false);
      }
    };

    /** Подписываемся на изменения размера экрана */
    mediaQuery.addEventListener('change', handleMediaChange);

    /** Удаляем слушатель при размонтировании компонента */
    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
    };
  }, []);

  /** Хендлер: переключает состояние мобильного меню (открыть/закрыть) */
  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => {
      if (prev) {
        burgerRef.current?.focus();
      }
      return !prev;
    });
  }, []);

  /** Хендлер: принудительно закрывает мобильное меню */
  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
    burgerRef.current?.focus();
  }, []);

  return (
    <header className={s.header}>
      <div className={s.container}>

        <Logo className={s.logo} /> {/* Компонент логотипа*/}
        <Menu className={s.menu} /> {/* Компонент меню */}

        {/* Контейнер для переключателя темы и бургер-иконки */}
        <div className={s.actions}>
          <ThemeSwitcher />
          <BurgerButton
            className={s.burger}
            ref={burgerRef} // пробрасываем реф через forwardRef
            isOpen={isMenuOpen} // состояние мобильного меню (открыто/закрыто)
            onClick={toggleMenu} // переключение состояния мобильного меню (открыть/закрыть)
            menuId="mobile-navigation" // связываем с ID MobileMenu для aria-controls
          />
        </div>

        {/* Компонент мобильного меню (через React Portal) */}
        <MobileMenu
          id="mobile-navigation"
          isOpen={isMenuOpen}
          onClose={closeMenu}
        />

      </div>
    </header>
  );
};
