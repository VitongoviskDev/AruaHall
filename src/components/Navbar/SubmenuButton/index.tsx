import React from 'react'

import { Link } from 'react-router-dom';

import styles from './SubmenuButton.module.css'
import type MenuButtonDTO from '../../../DTOs/MenuButtonDTO';

interface SubmenuButtonProps {
    menuButton: MenuButtonDTO;
    closeMenu: () => void;
}

const SubmenuButton: React.FC<SubmenuButtonProps> = ({ menuButton, closeMenu }) => {

    const HandleButtonClick = () => {
        closeMenu();
    }
    return (
        <div className={styles.submenuButton_container}
            onClick={HandleButtonClick}>
            <div className={styles.submenuButton_icon}>
                {
                    menuButton.icon &&
                    menuButton.icon
                }
            </div>
            <div className={styles.submenuButton_title_container}>
                {
                    menuButton.path ?
                        <Link
                            className={styles.submenuButton_title}
                            to={menuButton.path}>
                            {menuButton.title}
                        </Link> :
                        <span
                            className={`${styles.submenuButton_title}`}>
                            {menuButton.title}
                        </span>
                }
            </div>
        </div>
    )
}

export default SubmenuButton;