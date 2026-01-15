import s from './Logo.module.scss';

interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <a
      href="/"
      className={`${s.logo} ${className || ''}`}
      aria-label="М. Павлов — на главную страницу"
    >
      M.PAVLOV
      <span className={s.cursor} aria-hidden="true">_</span>
    </a>
  );
};
