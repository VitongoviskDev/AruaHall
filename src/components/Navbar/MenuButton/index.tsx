import React from 'react'

import { Link } from 'react-router-dom';

import styles from './MenuButton.module.css'
import type MenuButtonDTO from '../../../DTOs/MenuButtonDTO';
import { FaAngleDown } from 'react-icons/fa';

interface MenuButtonProps {
    menuButton: MenuButtonDTO;
    onClick: (menuButton: MenuButtonDTO) => void;
    onMouseEnter: (menuButton: MenuButtonDTO) => void;
    submenuShown: boolean;
    closeMenu: () => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({ menuButton, onClick, onMouseEnter, submenuShown, closeMenu }) => {

    return (
        <div className={`${styles.menuButton_container} ${submenuShown ? styles.active : ''}`}
            onMouseEnter={() => { onMouseEnter(menuButton) }}>
            <div className={styles.menuButton_title_container}
                onClick={closeMenu}>
                {
                    menuButton.path ?
                        <Link
                            className={`${styles.menuButton_title}`}
                            to={menuButton.path}>
                            {menuButton.title}
                        </Link> :
                        <span
                            className={`${styles.menuButton_title}`}>
                            {menuButton.title}
                        </span>
                }
            </div>
            {
                menuButton.submenus &&
                <div className={styles.menuButton_dropdownIcon}
                    onClick={() => onClick(menuButton)}>
                    <FaAngleDown />
                </div>
            }
        </div>
    )
}

export default MenuButton;