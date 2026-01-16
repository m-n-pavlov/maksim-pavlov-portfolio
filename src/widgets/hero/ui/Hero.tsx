import { HERO_DATA } from '../model/consts';
import s from './Hero.module.scss';

export const Hero = () => {

  const { firstName, lastName, avatar, tagline, summary } = HERO_DATA;

  return (
    <section id="hero" className={s.section} aria-labelledby="hero-title">
      <div className={s.content}>

        <div className={s.avatarWrapper}>
          <img
            src={avatar}
            alt={`${firstName} ${lastName}`}
            className={s.avatar}
            loading="eager"
          />
        </div>

        <div className={s.titleWrapper}>
          <h1 id="hero-title" className={s.title}>
            <strong className={s.nameWrapper}>
              <span className={s.firstName}>{firstName}</span>
              <span className={s.lastName}>{lastName}</span>
            </strong>
            <span className={s.tagline}>{tagline}</span>
          </h1>
        </div>

        <div className={s.summaryWrapper}>
          <p className={s.summary}>
            {summary}
          </p>
        </div>

      </div>
    </section>
  );
};
