import React, { useEffect, useState } from 'react'

import styles from './HomePage.module.css'

const HomePage:React.FC = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.home_page_container}>
      <p>width: {width}</p>
      HOME PAGE
    </div>
  )
}

export default HomePage