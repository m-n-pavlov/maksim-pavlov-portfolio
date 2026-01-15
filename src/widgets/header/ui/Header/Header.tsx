import { Menu } from '../Menu';
import { Logo } from "@/shared/ui";
import { ThemeSwitcher } from "@/features/theme-switcher";
import s from './Header.module.scss';

export const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <Logo className={s.logo} />
        <Menu className={s.menu} />
        <ThemeSwitcher className={s.switcher}/>
      </div>
    </header>
  );
};
