import {FOOTER_DATA} from "../model/consts.tsx";
import s from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer id="contact" className={s.section} aria-labelledby="contact-title">
      <h2 id="contact-title" className={s.visuallyHidden}>Контакты</h2>

      <div className={s.content}>

        <div className={s.welcome}>
          <h3 className={s.title}>
            Готов обсудить
            <span className={s.accent}>дополнительные вопросы</span>
          </h3>
          <p className={s.availability}>
            На связи по будням, 08:00–20:00 (UTC+5).
          </p>
        </div>


        <div className={s.socials}>
          <nav className={s.socialsList}>
            {FOOTER_DATA.socials.map(({ id, url, icon: Icon, label }) => (
              <a
                key={id}
                href={url}
                target={id === 'email' ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className={s.socialsLink}
                title={label} // Используем готовый label из констант
              >
                <Icon className={s.socialsIcon} aria-hidden="true" />
              </a>
            ))}
          </nav>
          <span className={s.copyright}>© 2026 Максим Павлов</span>
        </div>

      </div>

    </footer>
  );
};
