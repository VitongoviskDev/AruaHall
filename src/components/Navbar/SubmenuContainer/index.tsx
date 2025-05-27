import React from 'react'
import type SubmenuDTO from '../../../DTOs/SubmenuDTO';

import styles from './SubmenuContainer.module.css'
import SubmenuButton from '../SubmenuButton';
import { Link } from 'react-router-dom';

interface SubmenuContainerProps {
    submenus: SubmenuDTO[];
    shown: boolean;
}

const SubmenuContainer: React.FC<SubmenuContainerProps> = ({ submenus, shown }) => {
    return (
        <div className={`${styles.submenus_container} ${!shown ? styles.hidden : ''}`}>
            {
                submenus.map((sub, index) => (
                    <div key={index} className={styles.submenu}>
                        <div className={styles.submenu_title_container}>
                            <Link to={sub.path} className={styles.submenu_title}>{sub.title}</Link>
                        </div>
                        <ul className={styles.submenu_list}>
                            {
                                sub.items.map((item, itemIndex) => (
                                    <li
                                        key={itemIndex}>
                                        <SubmenuButton
                                            menuButton={item} />
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                ))
            }
        </div>
    )
}

export default SubmenuContainer