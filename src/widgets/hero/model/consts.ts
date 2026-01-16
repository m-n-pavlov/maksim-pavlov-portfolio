import type { Hero } from './types';
import MyAvatar from '@/shared/assets/images/my-avatar.webp';

/**
 * Конфигурация контента для виджета (секции) Hero
 * - данные уникальны и используются только в рамках этого виджета
 */
export const HERO_DATA = {
  firstName: 'Максим',
  lastName: 'Павлов',
  avatar: MyAvatar,
  tagline: 'Frontend Developer | Fintech Expert | Ex-Sber Team Lead',
  summary: 'Опыт внедрения масштабных финтех-решений позволяет мне создавать технологическую основу продуктов, масштаб которых понимаю изнутри, говорить на одном языке с бизнесом и проектировать архитектуру фронтенда, которая точно соответствует целям продукта и ожиданиям пользователей.',
} as const satisfies Hero;
