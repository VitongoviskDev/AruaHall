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
  const [timeoutId, setTimeoutId] = useState<number[]>([]);

  const onMenuButtonMouseEnter = (submenus: SubmenuDTO[]) => {
    if(submenus.length > 0)
      setDisplayedSubmenus(submenus);
    
    setSubmenuShown(submenus.length > 0);
  }

  return (
    <div className={styles.navbar_container}
      onPointerEnter={() => {
        setSubmenuShown(displayedSubmenus.length > 0);

        //clear timeouts so menu doesn't close when hovering just before closing
        timeoutId.map((id) => {
          clearTimeout(id);
        });

      }}
      onPointerLeave={() => {
        const showId = setTimeout(() => {
          setSubmenuShown(false);

          //wait submenus to be hidden before clearing them
          const submenusId = setTimeout(() => {
            setDisplayedSubmenus([]);
          }, 300)
          setTimeoutId(prev => [submenusId, ...prev]);
        }, 500);
        setTimeoutId(prev => [showId, ...prev]);
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