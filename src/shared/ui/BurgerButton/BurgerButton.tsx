import { forwardRef, type ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';
import s from './BurgerButton.module.scss';

/**
 * Пропсы компонента BurgerButton
 * - ButtonHTMLAttributes: наследует все стандартные атрибуты HTML-кнопки
 * - isOpen: состояние меню (закрыто: бургер, открыто: крестик)
 * - menuId: ID контролируемого меню для связки через aria-controls
 */
interface BurgerButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isOpen: boolean;
  menuId?: string;
}

/**
 * Универсальный UI-компонент кнопки бургер-меню с анимацией
 * - forwardRef: используется для обеспечения доступа к методам управления фокусом
 * - ref: ссылка на нативный DOM-элемент кнопки
 */
export const BurgerButton = forwardRef<HTMLButtonElement, BurgerButtonProps>(
  ({ isOpen, menuId = 'main-menu', className, onClick, ...props }, ref) => {
    return (
      <button
        ref={ref} // передает ссылку на DOM-узел родительскому компоненту через forwardRef
        type="button" // защищает от случайной отправки форм
        className={clsx(s.burger, { [s.open]: isOpen }, className)}
        onClick={onClick} // регистрирует обработчик события клика из пропсов
        aria-expanded={isOpen} // информирует скринридеры, открыто ли меню в данный момент
        aria-controls={menuId} // создает связь между кнопкой и ID блока меню
        aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'} // текстовое описание действия для доступности
        {...props} // позволяет прокинуть стандартные атрибуты HTML-кнопки (autoFocus и др.)
      >
        <span className={s.line} />
        <span className={s.line} />
        <span className={s.line} />
      </button>
    );
  }
);

/**
 * Имя компонента для отображения в React DevTools и отчетах об ошибках
 * - явное указание необходимо, так как компонент обернут в `forwardRef`
 */
BurgerButton.displayName = 'BurgerButton';
