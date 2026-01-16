import clsx from 'clsx';
import type { Project } from '../../model/types';
import s from './ProjectCard.module.scss';
import { TechIcon } from "@/shared/ui";
import { UIIcons } from '@/shared/assets/icons'; // 🔴

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export const ProjectCard = ({ project, className }: ProjectCardProps) => {
  return (
    /* Обертка всей карточки проекта */
    <article className={clsx(s.card, className)}>
      <div className={s.content}>

        <figure className={s.previewWrapper}>
          <img src={project.gifUrl} className={s.image} alt={`Демонстрация проекта ${project.title}`} />
          {/* Флекс-контейнер для ссылок в виде кнопок */}
          <figcaption className={s.actions}>
            {/* Ссылка на демо */}
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={s.externalLink}
              aria-label={`Открыть демо-версию проекта ${project.title}`}
            >
              <span className={s.linkLabel}>Демо</span>
              <UIIcons.ExternalLink className={s.linkIcon} />
            </a>
            {/* Ссылка на GitHub */}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={s.externalLink}
              aria-label={`Открыть исходный код проекта ${project.title}`}
            >
              <span className={s.linkLabel}>Исходный код</span>
              <UIIcons.Folder className={s.linkIcon} />
            </a>
          </figcaption>
        </figure>


        <div className={s.descriptionWrapper}>

          <header className={s.headerWrapper}>
            <h3 className={s.title}>{project.title}</h3>
            <p className={s.description}>{project.description}</p>
          </header>

          <div className={s.techStackWrapper}>
            {project.technologies.map(({ name, icon }) => (
              <div key={name} className={s.techStackItem} title={name} role="img" aria-label={name}>
                <TechIcon config={icon} className={s.techIcon} />
              </div>
            ))}
          </div>

          <ul className={s.featuresList}>
            {project.features.map((feature) => (
              <li key={feature} className={s.featureItem}>
                {feature}
              </li>
            ))}
          </ul>

        </div>


      </div>
    </article>
  );
};
