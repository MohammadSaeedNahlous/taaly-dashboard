import React from 'react'
import styles from './styles.module.css'
const Snackbar = ({ icon, word }) => {
    return (
        <div className={ styles.main }>
            <img src={ icon } />
            <h4>{ word }</h4>
        </div>
    )
}

export default Snackbar