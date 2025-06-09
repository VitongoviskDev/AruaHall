import { useEffect, useState } from 'react';

import styles from './Navbar.module.css'
import Menu from '../../util/menu.js';
import MenuButton from './MenuButton';

import type MenuButtonDTO from '../../DTOs/MenuButtonDTO';
import SubmenuContainer from './SubmenuContainer';


interface NavbarProps {
  closeMenu?: () => void;
  id?: string;
}

const Navbar: React.FC<NavbarProps> = ({ closeMenu = () => { }, id }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [displayedSubmenu, setDisplayedSubmenu] = useState<MenuButtonDTO | null>();


  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onMenuButtonClick = (menuButton: MenuButtonDTO) => {
    console.log("click")
    if (width < 1280)
      setDisplayedSubmenu(prev => prev !== menuButton ? menuButton : null);
  }
  const onMenuButtonMouseEnter = (menuButton: MenuButtonDTO) => {
    if (width >= 1280)
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
                  onMouseEnter={onMenuButtonMouseEnter}
                  closeMenu={OnCloseMenu}
                  submenuShown={displayedSubmenu == item} />
                <SubmenuContainer
                  menuButton={item}
                  shown={item == displayedSubmenu}
                  closeMenu={OnCloseMenu} />
              </li>
            ))
          }
        </ul>
      </nav>
    </div>
  )
}

export default Navbar