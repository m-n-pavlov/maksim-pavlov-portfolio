import { useLayoutEffect } from 'react';

/**
 * Универсальный хук для блокировки прокрутки страницы (html/body)
 * - предотвращает прокрутку при открытии модальных окон, оверлеев или мобильного меню
 * - устраняет "прыжок" контента (Layout Shift) за счет вычисления ширины
 *   системного скроллбара и добавления компенсационного отступа (padding-right)
 * - блокирует overflow одновременно на уровне html и body для 100% покрытия
 *   всех браузеров и мобильных платформ (включая iOS Safari)
 * - locked: boolean - флаг состояния блокировки, если true - скролл выключен
 */

export const useLockedBody = (locked: boolean): void => {
  useLayoutEffect(() => {
    if (!locked) return;

    /** Кладем в переменные элементы html и body */
    const html = document.documentElement;
    const { body } = document;

    /** Сохраняем исходные стили, чтобы восстановить их при размонтировании */
    const originalHtmlOverflow = html.style.overflow;
    const originalBodyOverflow = body.style.overflow;
    const originalPaddingRight = body.style.paddingRight;

    /**
     * Проверяем, есть ли вообще вертикальный скролл на странице
     * - scrollHeight - высота всего контента, clientHeight - высота видимой части
     */
    const hasScrollbar = html.scrollHeight > html.clientHeight;

    /**
     * Вычисляем ширину вертикальной полосы прокрутки
     * - innerWidth - ширина окна с учетом скролла
     * - clientWidth - ширина окна без учета скролла
     */
    const scrollBarWidth = window.innerWidth - html.clientWidth;


    /** Блокируем обоих (на мобилках часто скролл "сидит" именно в html) */
    html.style.overflow = 'hidden';
    body.style.overflow = 'hidden';

    /**
     * Компенсируем исчезновение скроллбара, чтобы страница не "дергалась"
     * - но только если скроллбар действительно был
     */
    if (hasScrollbar && scrollBarWidth > 0) {
      body.style.paddingRight = `${scrollBarWidth}px`;
    }

    /** Очистка - возвращаем всё как было */
    return () => {
      html.style.overflow = originalHtmlOverflow;
      body.style.overflow = originalBodyOverflow;
      body.style.paddingRight = originalPaddingRight;
    };
  }, [locked]);
};
