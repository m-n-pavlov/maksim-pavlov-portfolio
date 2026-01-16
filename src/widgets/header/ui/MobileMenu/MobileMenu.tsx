import clsx from 'clsx';
import { Portal, BurgerButton } from '@/shared/ui';
import { Menu } from '../Menu/Menu';
import s from './MobileMenu.module.scss';

interface MobileMenuProps {
  id: string; // уникальный идентификатор для связки с кнопкой BurgerButton через aria-controls
  isOpen: boolean; // состояние открытия меню
  onClose: () => void; // функция закрытия (при клике на оверлей, кнопку закрытия или Esc)
  className?: string; // дополнительные CSS-классы для стилизации портала (опционально)
}

export const MobileMenu = ({ id, isOpen, onClose, className }: MobileMenuProps) => {

  // if (!isOpen) return null;
  // - теперь всегда рендерим портал в DOM-дереве
  // - управляем состоянием через CSS класс .active
  // - исключаем баги, когда анимация срывается из-за удаления элемента

  return (
    <Portal>
      <div className={clsx(s.overlay, { [s.active]: isOpen }, className)}>

        <div
          id={id}
          className={s.content}
          role="dialog"
          aria-modal={isOpen}
          aria-labelledby="mobile-menu-title" // связываем с заголовком
        >

          <h2 id="mobile-menu-title" className={s.visuallyHidden}>
            Навигационное меню
          </h2>

          <div className={s.header}>
            <div className={s.controls}>
              <BurgerButton
                isOpen={true}
                onClick={onClose}
                aria-label="Закрыть меню"
              />
            </div>
          </div>

          <div className={s.body}>
            <Menu
              variant="mobileMenu"
              onItemClick={onClose}
            />
          </div>

        </div>
      </div>
    </Portal>
  );
};
