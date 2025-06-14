import React, { useState } from 'react'

import styles from './MenuBurger.module.css';

import { IoMenu } from "react-icons/io5";

interface MenuBurgerButtonProps{
    onClick: () => void;
}

const MenuBurger: React.FC<MenuBurgerButtonProps> = ({onClick}) => {
    return (
        <div className={styles.menu_burger_container}>
            <button className={styles.menu_burger_button}
                onClick={onClick}>
                <IoMenu />
            </button>
        </div>
    )
}

export default MenuBurger