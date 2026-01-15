import type { ReactNode, CSSProperties } from 'react';
import type { Responsive } from '@/shared/types/responsive';
import s from './LayoutGrid.module.scss';

interface LayoutGridProps {
  children: ReactNode;
  columns?: Partial<Responsive<number>>;
  gap?: string | Partial<Responsive<string>>;
}

/**
 * Универсальный адаптивный контейнер
 * Этот компонент управляет раскладкой любого контента.
 * Он превращает переданные пропсы в производительную CSS-сетку,
 * автоматически рассчитывая поведение для мобилок, планшетов и десктопов.
 * @param children
 * @param columns
 * @param gap
 * @constructor
 */

export const LayoutGrid = ({
  children,
  columns,
  gap = '20px'
}: LayoutGridProps) => {

  // Логика фоллбэков для колонок: mobile -> tablet -> desktop
  const mCols = columns?.mobile ?? 1;
  const tCols = columns?.tablet ?? mCols;
  const dCols = columns?.desktop ?? tCols;

  // Логика фоллбэков для отступов: mobile -> tablet -> desktop

  // Приводим gap к единому объекту настроек (Нормализация)
  const gapSettings = typeof gap === 'string'
    ? { mobile: gap, tablet: gap, desktop: gap }
    : gap;

  // Вычисляем финальные значения с фоллбэками
  const mGap = gapSettings.mobile ?? '20px';
  const tGap = gapSettings.tablet ?? mGap;
  const dGap = gapSettings.desktop ?? tGap;

  const inlineStyles = {
    '--cols-mobile': mCols,
    '--cols-tablet': tCols,
    '--cols-desktop': dCols,
    '--gap-mobile': mGap,
    '--gap-tablet': tGap,
    '--gap-desktop': dGap,
  } as CSSProperties;

  return (
    <div className={s.grid} style={inlineStyles}>
      {children}
    </div>
  );
};
