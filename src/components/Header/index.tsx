import React from 'react'

import styles from './Header.module.css'
import Navbar from '../Navbar'

import logo from '../../assets/AruaHallLogo2White.png'

const Header: React.FC = () => {
  return (
    <div className={styles.header_container}>
      <div className={styles.header_logo_container}>
        <img
          className={styles.header_logo}
          src={logo} alt="LOGO" />
      </div>
      <div className={styles.header_navbar_container}>
        <Navbar />
      </div>
      <div className={styles.header_cta_container}>
        publique
      </div>
    </div>
  )
}

export default Header