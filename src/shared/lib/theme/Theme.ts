/**
 * Создаем объект-константу (она останется в JS)
 * - используем объект с as const вместо enum
 * - это дает иммутабельность (readonly) и позволяет генерировать типы из значений
 */
export const Theme = {
  LIGHT: 'light',
  DARK: 'dark',
} as const;

/**
 * Генерируем Union-тип ('light' | 'dark') на основе значений объекта
 * - это избавляет от дублирования кода и обеспечивает строгую типизацию
 */
export type Theme = typeof Theme[keyof typeof Theme];

/** Ключ для сохранения темы в хранилище браузера */
export const LOCAL_STORAGE_THEME_KEY = 'theme';
