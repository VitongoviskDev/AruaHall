import { useState } from 'react';

import styles from './Navbar.module.css'
import Menu from '../../util/menu.js';
import MenuButton from './MenuButton';

import type MenuButtonDTO from '../../DTOs/MenuButtonDTO';
import type SubmenuDTO from '../../DTOs/SubmenuDTO';
import SubmenuContainer from './SubmenuContainer';

const Navbar = () => {
  const [displayedSubmenus, setDisplayedSubmenus] = useState<SubmenuDTO[]>([]);
  const [submenuShown, setSubmenuShown] = useState<boolean>(false);
  const [timeoutId, setTimeoutId] = useState<number | null>(null);

  const onMenuButtonMouseEnter = (submenus: SubmenuDTO[]) => {
    if(submenus.length > 0)
      setDisplayedSubmenus(submenus);
    
    setSubmenuShown(submenus.length > 0);
  }

  return (
    <div className={styles.navbar_container}
      onPointerEnter={() => {
        setSubmenuShown(displayedSubmenus.length > 0);
        if (timeoutId)
          clearTimeout(timeoutId);
      }}
      onPointerLeave={() => {
        const id = setTimeout(() => {
          setSubmenuShown(false);
        }, 500);
        setTimeoutId(id);
      }}>
      <nav className={styles.navbar}>
        <ul className={styles.navbar_list}>
          {
            Menu.items.map((item: MenuButtonDTO, index) => (
              <li
                key={index}>
                <MenuButton
                  menuButton={item}
                  onMouseEnter={onMenuButtonMouseEnter} />
              </li>
            ))
          }
        </ul>
      </nav>
      {
        <SubmenuContainer submenus={displayedSubmenus} shown={submenuShown}/>
      }
    </div>
  )
}

export default Navbar