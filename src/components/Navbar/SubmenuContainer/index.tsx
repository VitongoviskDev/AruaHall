import React, { useEffect, useState } from 'react'
import type SubmenuDTO from '../../../DTOs/SubmenuDTO';

import styles from './SubmenuContainer.module.css'
import SubmenuButton from '../SubmenuButton';
import { Link } from 'react-router-dom';
import type MenuButtonDTO from '../../../DTOs/MenuButtonDTO';

interface SubmenuContainerProps {
    menuButton: MenuButtonDTO;
    shown: boolean;
    closeMenu: () => void;
}

const SubmenuContainer: React.FC<SubmenuContainerProps> = ({ menuButton, shown, closeMenu }) => {
    const [submenus, setSubmenus] = useState<SubmenuDTO[] | null>(null);

    useEffect(() => {
        const sub = menuButton.submenus || [];
        if (sub !== submenus)
            setSubmenus(sub.length > 0 ? sub : null)
        else
            setSubmenus(null);

        console.log(submenus);
        console.log(shown);
    }, [])


    const HandleSubmenuTitleClick = () => {
        closeMenu();
    }

    if(shown)
    return (
        <div className={`${styles.submenus_container}`}>
            {
                submenus && submenus.map((sub, index) => (
                    <div
                        key={index}
                        className={styles.submenu}>
                        <div className={styles.submenu_title_container}>
                            <Link to={sub.path} className={styles.submenu_title}
                                onClick={HandleSubmenuTitleClick}>
                                {sub.title}
                            </Link>
                        </div>
                        <ul className={styles.submenu_list}>
                            {
                                sub.items.map((item, itemIndex) => (
                                    <li
                                        key={itemIndex}
                                        className={styles.submenu_list_item}>
                                        <SubmenuButton
                                            closeMenu={closeMenu}
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