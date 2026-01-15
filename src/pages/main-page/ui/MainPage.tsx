import { LayoutGrid } from '@/shared/ui/LayoutGrid';
// Представим, что у нас уже есть готовые виджеты
// import { ProjectList } from '@/widgets/ProjectList';
// import { Skills } from '@/widgets/Skills';

import s from './MainPage.module.scss';

export const MainPage = () => {
  return (
    <main className={s.page}>

      {/* Секция 1: Проекты (3 колонки) */}
      <section className={s.section}>
        <h2 className={s.title}>Портфолио</h2>
        <LayoutGrid columns={{ tablet: 2, desktop: 3 }} gap="30px">
          {/* Здесь может быть виджет или список entities */}
          <div className={s.dummyCard}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
          <div className={s.dummyCard}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
          <div className={s.dummyCard}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
        </LayoutGrid>
      </section>

      {/* Секция 2: Навыки (сетка из 4 колонок или более мелкая) */}
      <section className={s.section}>
        <h2 className={s.title}>Навыки</h2>
        <LayoutGrid columns={{ mobile: 2, tablet: 4, desktop: 6 }} gap="15px">
          <div className={s.skillTag}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
          <div className={s.skillTag}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
          <div className={s.skillTag}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
          <div className={s.skillTag}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
        </LayoutGrid>
      </section>

    </main>
  );
};
