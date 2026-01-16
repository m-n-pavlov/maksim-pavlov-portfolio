import type {FC, SVGProps} from 'react';

// Выносим тип иконки отдельно для чистоты
type SvgIcon = FC<SVGProps<SVGSVGElement>>;

export type TechIconConfig =
  | SvgIcon // Одиночная иконка
  | { light: SvgIcon; dark: SvgIcon }; // Пара для разных тем

export interface ProjectTech {
  name: string; // название используемой технологии
  icon: TechIconConfig; // тип для SVGR компонентов (поддерживает оба варианта)
}

export interface Project {
  id: string; // для маппинга
  title: string; // название проекта
  gifUrl: string; // путь к GIF
  demoUrl: string; // ссылка на Netlify
  githubUrl: string; // ссылка на GitHub
  description: string; // краткое описание приложения
  technologies: ProjectTech[]; // стек с иконками
  features: string[]; // используемые технические решения
}
