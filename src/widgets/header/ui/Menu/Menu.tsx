import { MENU_ITEMS } from '../../model/consts';
import s from './Menu.module.scss';

interface MenuProps {
  className?: string;
}

export const Menu = ({ className }: MenuProps) => {
  return (
    <nav className={className}>
      <ul className={s.menuList}>
        {MENU_ITEMS.map((item) => (
          <li key={item.href}>
            <a href={item.href} className={s.link}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
