import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";

import styles from "./BurgerMenu.module.css";
import { IoMenu } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";

interface BurgerMenuProps{
  id?: string;
}

export const BurgerMenu: React.FC<BurgerMenuProps> = ({id=""}) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    const handleCloseMenu = () => {
        setIsOpen(false)
    }

    return (
        <div className={styles.burgerMenu_container} id={id}>
            <button className={styles.burgerMenu_button} onClick={() => setIsOpen(true)}>
                <IoMenu />
            </button>

            {isOpen && (
                <div>
                    <div className={styles.burgerMenu_overlay} onClick={handleCloseMenu} />
                    <div className={styles.burgerMenu_navbar_panel}>
                        <button className={styles.burgerMenu_close_btn} onClick={handleCloseMenu}>
                            <IoIosClose />
                        </button>
                        <div className={styles.burgerMenu_navbar_container}>
                            <Navbar
                                closeMenu={handleCloseMenu} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
