// src/shared/model/Theme.ts

// 1. Создаем объект-константу (она останется в JS)
export const Theme = {
  LIGHT: 'light',
  DARK: 'dark',
} as const;

// 2. Создаем тип на основе этого объекта (он сотрется при компиляции)
// Это позволит использовать Theme.LIGHT как значение и Theme как тип
export type Theme = typeof Theme[keyof typeof Theme];

export const LOCAL_STORAGE_THEME_KEY = 'theme';
