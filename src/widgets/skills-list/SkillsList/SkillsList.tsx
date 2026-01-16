import { SKILLS_LIST, SkillCard } from '@/entities/skill';
import s from './SkillsList.module.scss';

export const SkillsList = () => {
  return (
    <section id="skills" className={s.section} aria-labelledby="skills-title">
      <h2 id="skills-title" className={s.visuallyHidden}>Навыки</h2>

      <div className={s.content}>
        {SKILLS_LIST.map((card) => (
          <SkillCard
            key={card.id}
            data={card}
            data-grid-id={card.id}
          />
        ))}
      </div>

    </section>
  );
};
