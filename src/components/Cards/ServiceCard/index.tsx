import React from 'react'
import type CardDTO from '../../../DTOs/CardDto'

import styles from './ServiceCard.module.css'

interface ServiceCardProps {
    card: CardDTO;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ card }) => {
    return (
        <div className={styles.service_card_container}>
            <h2>{card.Title}</h2>
            <h3>{card.Subtitle}</h3>
            <div className={styles.categories_container}>
                {
                    card.Categories.map((category, index) => (
                        <p>{category.category}</p>
                    ))
                }
            </div>
            <div className={styles.categories_container}>
                {
                    card.Categories.map((category, index) => (
                        <p>{category.category}</p>
                    ))
                }
            </div>
        </div>
    )
}

export default ServiceCard