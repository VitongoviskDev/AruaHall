import React from 'react'

import { Link } from 'react-router-dom';

import styles from './SubmenuButton.module.css'
import type MenuButtonDTO from '../../../DTOs/MenuButtonDTO';

interface SubmenuButtonProps {
    menuButton: MenuButtonDTO;
}

const SubmenuButton: React.FC<SubmenuButtonProps> = ({ menuButton }) => {

    return (
        <div className={styles.submenuButton_container}>
            <div className={styles.submenuButton_icon}>
                {
                    menuButton.icon &&
                    menuButton.icon
                }
            </div>
            {
                menuButton.path ?
                    <Link
                        className={`${styles.submenuButton_title} ${styles.submenuButton_link}`}
                        to={menuButton.path}>
                        {menuButton.title}
                    </Link> :
                    <span
                        className={`${styles.submenuButton_title}`}>
                        {menuButton.title}
                    </span>
            }
        </div>
    )
}

export default SubmenuButton;