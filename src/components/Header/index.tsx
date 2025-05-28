import React from 'react'

import styles from './Header.module.css'

import logo from '../../assets/AruaHallLogo2White.png'
import { BurgerMenu } from '../BurgerMenu'
import Navbar from '../Navbar'

const Header: React.FC = () => {
  return (
    <div className={styles.header_container}>
      <div className={styles.header_logo_container}>
        <img
          className={styles.header_logo}
          src={logo} alt="LOGO" />
      </div>
      <div className={styles.header_menu_container}>
        <BurgerMenu id={styles.header_menu_burgerMenu}/>
        <Navbar id={styles.header_menu_navbar}/>
      </div>
    </div>
  )
}

export default Header