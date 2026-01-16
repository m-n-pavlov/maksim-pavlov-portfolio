import clsx from 'clsx';
import type { SkillCardData } from '../../model/types';
import s from './SkillCard.module.scss';
import React from "react";

interface SkillCardProps extends React.HTMLAttributes<HTMLElement> {
  data: SkillCardData;
}

/** Универсальный компонент одной бенто-карточки */
export const SkillCard = ({ data, className, ...rest }: SkillCardProps) => {

  /**
   * Проверяем наличие навыков у конкретной карточки:
   * - если в карточке есть хотябы один блок с полем skills (true) - делаем карточку grid (для блоков с тегами)
   * - если нет (false) - делаем карточку flex (для тезисов)
   */
  const isGridView = data.items.some(item => !!item.skills?.length);

  return (
    /** Вся бенто-карточка целиком */
    <article className={clsx(s.card, className)} {...rest}>

      {/* Контейнер для заголовка и подзаголовка */}
      <div>
        <h3 className={s.title}>{data.title}</h3>
        {data.subtitle && <p className={s.subTitle}>{data.subtitle}</p>}
      </div>

      {/* Контейнер для групп/тезисов */}
      <div className={clsx(isGridView ? s.gridView : s.flexView)}>
        {data.items.map((item) => {

          /** Проверяем наличие навыков у конкретного элемента */
          const hasSkills = !!item.skills?.length;

          return (
            /** Конкретная группа, которая получит еще и заголовок или тезис */
            <div key={item.id} className={clsx(hasSkills ? s.withSkills : s.withoutSkills)}>
              {item.label && <h4 className={s.label}>{item.label}</h4>}

              {hasSkills && (
                /** Контейнер для тегов */
                <div className={s.tags}>
                  {item.skills?.map((skill) => (
                    /** Сами теги */
                    <span key={skill} className={s.tag}>{skill}</span>
                  ))}
                </div>
              )}

              {/* Техстовое описание группы с тегами/тезиса */}
              <p className={clsx(s.text, !hasSkills && s.textOnly)}>
                {item.text}
              </p>
            </div>
          );
        })}
      </div>

    </article>
  );
};
