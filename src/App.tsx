import React from 'react'

import styles from './App.module.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import NotFoundPage from './pages/NotFound'
import Navbar from './components/Navbar'
import LocalsPage from './pages/LocalsPage'
import ServicePage from './pages/ServicePage'
import Header from './components/Header'

const App:React.FC = () => {
  return (
    <div className={styles.app_container}>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/locals" element={<LocalsPage />} />
          <Route path="/locals/:category" element={<LocalsPage />} />
          <Route path="/locals/:category/:subcategory" element={<LocalsPage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/services/:category" element={<ServicePage />} />
          <Route path="/services/:category/:subcategory" element={<ServicePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App