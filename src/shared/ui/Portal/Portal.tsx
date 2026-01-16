import { useState, useLayoutEffect, type ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactNode;
  /** * HTMLElement в который будет монтироваться портал.
   * По умолчанию document.body, но можно передать любой другой узел.
   */
  container?: HTMLElement;
}

/**
 * Универсальный компонент Portal
 * - используется для выноса мобильного меню в корень DOM
 * - позволяет избежать проблем с z-index и наложениями стилей
 * - гарантирует безопасный рендеринг в DOM, избегая ошибок гидратации (SSR)
 */
export const Portal = ({ children, container }: PortalProps) => {
  const [mounted, setMounted] = useState(false);

  // Ждем монтирования компонента в DOM, чтобы избежать ошибок 'document is not defined'
  useLayoutEffect(() => {
    setMounted(true);
  }, []);

  // Если компонент еще не примонтирован (SSR стадия), ничего не рендерим
  if (!mounted) {
    return null;
  }

  // Если контейнер не передан, используем body по умолчанию (безопасно на клиенте)
  const target = container ?? document.body;

  return createPortal(children, target);
};
