import styles from './ServicePage.module.css'
import { useParams } from 'react-router-dom'

import { ServiceCards } from '../../util/data'
import ServiceCard from '../../components/Cards/ServiceCard'

const ServicePage = () => {
  const { category, subcategory } = useParams()

  return (
    <div className={styles.locals_page_container}>
      <h1>Services page</h1>
      <p>category: {category ? category : "null"}</p>
      <p>subcategory: {subcategory ? subcategory : "null"}</p>

      <ul>
        {
          ServiceCards.cards.map((card, index) => (
            <ServiceCard key={index} card={card}/>
          ))
        }
      </ul>
    </div>
  )
}

export default ServicePage