import React, { useState } from 'react'

import styles from './Header.module.css';
import MenuBurger from '../MenuBurger';

const Header: React.FC = () => {
    const [menuShown, setMenuShown] = useState<boolean>(false);

    return (
        <div className={styles.header_container}>

            <div className={styles.top_container}>
                <div className={styles.logo_container}>
                    <h1 className={styles.logo}>Aruã Hall</h1>
                </div>
                <div className={styles.right_container}>
                    <div className={styles.cta_container}>
                        <button className={styles.cta_button}>
                            Publique seu negócio
                        </button>
                    </div>
                    <div className={styles.burger_menu_container}>
                        <MenuBurger onClick={() => setMenuShown(prev => !prev)} />
                    </div>
                </div>
            </div>
            {
                menuShown &&
                <div className={styles.nav_container}>
                    Teste
                </div>
            }
        </div>
    )
}

export default Header