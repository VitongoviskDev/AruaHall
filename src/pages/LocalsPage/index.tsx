import styles from './LocalsPage.module.css'
import { useParams } from 'react-router-dom'

const LocalsPage = () => {
  const { category, subcategory } = useParams()

  return (
    <div className={styles.locals_page_container}>
        <h1>Locals page</h1>
        <p>category: {category ? category : "null"}</p>
        <p>subcategory: {subcategory ? subcategory : "null"}</p>
    </div>
  )
}

export default LocalsPage