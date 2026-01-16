import { PROJECTS_LIST, ProjectCard } from '@/entities/project';
import s from './ProjectsList.module.scss';

export const ProjectsList = () => {
  return (
    <section id="projects" className={s.section} aria-labelledby="projects-title">
      <h2 id="projects-title" className={s.visuallyHidden}>Проекты</h2>

      <div className={s.content}>
        {PROJECTS_LIST.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>

    </section>
  );
};
