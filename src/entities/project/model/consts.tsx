import { TechIcons } from '@/shared/assets/icons'; // импортируем группу Tech-иконок
import type { Project } from './types';

export const PROJECTS_LIST = [
  {
    id: '1',
    title: 'Skills Swap',
    gifUrl: 'src/shared/assets/images/skills-swap.webp',
    demoUrl: 'https://skills-swap-m-pavlov.vercel.app',
    githubUrl: 'https://github.com/m-n-pavlov/skills-swap',
    description: 'Платформа для обмена навыками между пользователями с поиском и фильтрацией.',
    technologies: [
      { name: 'React', icon: TechIcons.React },
      { name: 'Redux', icon: TechIcons.Redux },
      { name: 'TypeScript', icon: TechIcons.TypeScript },
      { name: 'ReactRouter', icon: TechIcons.ReactRouter },
      { name: 'MSW', icon: TechIcons.MockServiceWorker },
      { name: 'Jest', icon: TechIcons.Jest },
      { name: 'Cypress', icon: TechIcons.Cypress },
      { name: 'Storybook', icon: TechIcons.Storybook },
      { name: 'Vite', icon: TechIcons.Vite },
    ],
    features: [
      'Структура приложения по методологии FSD',
      'Система бесконечного скролла и динамические списки',
      'Глобальная фильтрация и сортировка через Redux Toolkit',
      'Кастомные хуки для агрегации данных и пагинации',
      'Библиотека UI-компонентов (Storybook, SVGR)',
    ]
  },
  {
    id: '2',
    title: 'Stellar Burgers',
    gifUrl: 'src/shared/assets/images/stellar-burgers.webp',
    demoUrl: 'https://m-n-pavlov.github.io/stellar-burgers/',
    githubUrl: 'https://github.com/m-n-pavlov/stellar-burgers',
    description: 'Интерактивный конструктор космических бургеров с авторизацией и лентой заказов.',
    technologies: [
      { name: 'React', icon: TechIcons.React },
      { name: 'Redux', icon: TechIcons.Redux },
      { name: 'TypeScript', icon: TechIcons.TypeScript },
      { name: 'ReactRouter', icon: TechIcons.ReactRouter },
      { name: 'Webpack', icon: TechIcons.Webpack },
    ],
    features: [
      'Защищенные маршруты (Protected Routes) и система авторизации',
      '«Фоновый» роутинг для модальных окон с сохранением контекста',
      'Интерактивный конструктор с динамическим расчетом стоимости',
      'Управление жизненным циклом токенов (Access/Refresh)',
      'Синхронизация состояния ленты заказов и конструктора через Redux',
    ]
  },
  {
    id: '3',
    title: 'WEB-ларёк',
    gifUrl: 'src/shared/assets/images/web-larek.webp',
    demoUrl: 'https://m-n-pavlov.github.io/web-larek/',
    githubUrl: 'https://github.com/m-n-pavlov/web-larek',
    description: 'Интернет-магазин с каталогом товаров, возможностью добавить товары в корзину и сделать заказ.',
    technologies: [
      { name: 'TypeScript', icon: TechIcons.TypeScript },
      { name: 'HTML', icon: TechIcons.HTML },
      { name: 'Sass', icon: TechIcons.Sass },
      { name: 'Webpack', icon: TechIcons.Webpack },
    ],
    features: [
      'Архитектура Model-View-Presenter с жестким разделением слоев',
      'Собственная шина событий (EventEmitter) для реактивного обновления интерфейса',
      'Иерархия типизированных UI-классов на чистом TypeScript',
      'Двухэтапная валидация форм с динамическим управлением состоянием',
      'Абстрактный слой работы с API для типобезопасных сетевых запросов',
    ]
  },
] as const satisfies readonly Project[];
