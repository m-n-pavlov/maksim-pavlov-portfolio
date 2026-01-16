/* Импорт tech-иконок */
import Cypress from './tech/Cypress.svg?react';
import HTML from './tech/HTML.svg?react';
import Jest from './tech/Jest.svg?react';
import MockServiceWorker from './tech/MockServiceWorker.svg?react';
import React from './tech/React.svg?react';
import ReactRouter from './tech/ReactRouter.svg?react';
import Redux from './tech/Redux.svg?react';
import Sass from './tech/Sass.svg?react';
import Storybook from './tech/Storybook.svg?react';
import TypeScript from './tech/TypeScript.svg?react';
import Vite from './tech/Vite.svg?react';
import Webpack from './tech/Webpack.svg?react';

/* Импорт social-иконок */
import GitHub from './social/github.svg?react';
import LinkedIn from './social/linkedin.svg?react';
import Telegram from './social/telegram.svg?react';
import Email from './social/email.svg?react';

/* Импорт UI-иконок */
import ExternalLink from './ui/externallink.svg?react';
import Folder from './ui/folder.svg?react';
import DarkTheme from './ui/DarkTheme.svg?react';
import LightTheme from './ui/LightTheme.svg?react';

/* Объект с tech-иконками */
export const TechIcons = {
  Cypress,
  HTML,
  Jest,
  MockServiceWorker,
  React,
  ReactRouter,
  Redux,
  Sass,
  Storybook,
  TypeScript,
  Vite,
  Webpack,
} as const;

/* Объект с social-иконками */
export const SocialIcons = {
  GitHub,
  LinkedIn,
  Telegram,
  Email,
} as const;

/* Объект с UI-иконками */
export const UIIcons = {
  ExternalLink,
  Folder,
  DarkTheme,
  LightTheme,
} as const;
