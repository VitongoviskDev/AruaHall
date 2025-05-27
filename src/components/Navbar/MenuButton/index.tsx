import React from 'react'

import { Link } from 'react-router-dom';

import styles from './MenuButton.module.css'
import type MenuButtonDTO from '../../../DTOs/MenuButtonDTO';
import type SubmenuDTO from '../../../DTOs/SubmenuDTO';
import { IoIosArrowDropdown } from 'react-icons/io';

interface MenuButtonProps {
    menuButton: MenuButtonDTO;
    onMouseEnter: (submenus: SubmenuDTO[]) => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({ menuButton, onMouseEnter }) => {

    return (
        <div className={styles.menuButton_container}
            onMouseEnter={() => onMouseEnter(menuButton.submenus || [])}>
            {
                menuButton.path ?
                    <Link
                        className={`${styles.menuButton_title} ${styles.menuButton_link}`}
                        to={menuButton.path}>
                        {menuButton.title}
                    </Link> :
                    <span
                        className={`${styles.menuButton_title}`}>
                        {menuButton.title}
                    </span>
            }
            {
                menuButton.submenus &&
                <div className={styles.menuButton_dropdownIcon}>
                    <IoIosArrowDropdown />
                </div>
            }
        </div>
    )
}

export default MenuButton;