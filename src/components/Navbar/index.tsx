import { useState } from 'react';

import styles from './Navbar.module.css'
import Menu from '../../util/menu.js';
import MenuButton from './MenuButton';

import type MenuButtonDTO from '../../DTOs/MenuButtonDTO';
import SubmenuContainer from './SubmenuContainer';


interface NavbarProps {
  closeMenu?: () => void;
  id?: string;
}

const Navbar: React.FC<NavbarProps> = ({ closeMenu = () =>{}, id }) => {
  const [displayedSubmenu, setDisplayedSubmenu] = useState<MenuButtonDTO | null>();

  const onMenuButtonClick = (menuButton: MenuButtonDTO) => {
    console.log("click")
    setDisplayedSubmenu(prev => prev !== menuButton ? menuButton : null);
  }

  const OnCloseMenu = () => {
    closeMenu();
    setDisplayedSubmenu(null);
  }

  return (
    <div className={styles.navbar_container} id={id}>
      <nav className={styles.navbar}>
        <ul className={styles.navbar_list}>
          {
            Menu.items.map((item: MenuButtonDTO, index) => (
              <li
                className={styles.navbar_list_item}
                key={index}>
                <MenuButton
                  menuButton={item}
                  onClick={onMenuButtonClick}
                  closeMenu={OnCloseMenu}
                  submenuShown={displayedSubmenu == item} />
                <SubmenuContainer
                  menuButton={item}
                  shown={item == displayedSubmenu} 
                  closeMenu={OnCloseMenu}/>
              </li>
            ))
          }
        </ul>
      </nav>
    </div>
  )
}

export default Navbar