import styles from './ServicePage.module.css'
import { useParams } from 'react-router-dom'

const ServicePage = () => {
  const { category, subcategory } = useParams()

  return (
    <div className={styles.locals_page_container}>
        <h1>Services page</h1>
        <p>category: {category ? category : "null"}</p>
        <p>subcategory: {subcategory ? subcategory : "null"}</p>
    </div>
  )
}

export default ServicePage