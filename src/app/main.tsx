import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // 1. Импортируем Роутер
import { App } from './App.tsx';
import './styles/index.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/maksim-pavlov-portfolio">
      <App />
    </BrowserRouter>
  </StrictMode>,
);
