import type { MenuItem } from "./types";

export const MENU_ITEMS: MenuItem[] = [
  { label: 'Обо мне', href: '#about' },
  { label: 'Навыки', href: '#skills' },
  { label: 'Проекты', href: '#projects' },
  { label: 'Опыт', href: '#experience' },
  { label: 'Контакты', href: '#contact' }
] as const;
