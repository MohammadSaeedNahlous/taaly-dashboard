import React from 'react'
import styles from './styles.module.css'
const InformationCard = ({ icon, text, data }) => {
    return (
        <div className={ styles.main }>
            <div className={ styles.imgContainer }>
                <img src={ icon } alt="" />
            </div>
            <div className={ styles.dataCol }>
                <h2>{ text }</h2>
                <h2>{ data }</h2>
            </div>
        </div>
    )
}

export default InformationCard