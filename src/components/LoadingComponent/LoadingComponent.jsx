import React from 'react'
import styles from './styles.module.css'
const LoadingComponent = ({ small }) => {
    return (
        <div className={ 'w-100 d-flex align-items-center justify-content-center ' +
            small ? styles.smallImg : styles.img } >
            <img src='/res/imgs/taaly-smile.svg' />
        </div>
    )
}

export default LoadingComponent