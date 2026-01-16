import type { MenuItem } from "./types"; // импорт типа для пукта меню

/**
 * Типизированный массив пунктов меню
 * - используется SCREAMING_SNAKE_CASE, так как является глобальной константой
 * - as const сообщает TS, что этот массив нельзя изменять (read-only)
 * - используется в Header и MobileMenu для соблюдения принципа DRY
 */
export const MENU_ITEMS = [
  { label: 'Обо мне', href: '#hero' },
  { label: 'Навыки', href: '#skills' },
  { label: 'Проекты', href: '#projects' },
  // { label: 'Опыт', href: '#experience' },
  { label: 'Контакты', href: '#contact' }
] as const satisfies readonly MenuItem[];
