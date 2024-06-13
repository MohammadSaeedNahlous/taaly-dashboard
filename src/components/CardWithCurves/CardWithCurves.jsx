import React from 'react'
import styles from './styles.module.css'
const CardWithCurves = ({ name, location, previewText, variation = 1 }) => {
    return (
        <div className={ `${styles.main} ${styles[`main${variation}`]}` }>
            <img className={ styles.upperCurve } src={ `/res/imgs/upper-curve-${variation}.svg` } />
            <h1 className={ styles.name }>{ name }</h1>
            <h6 className={ styles.location }>{ location }</h6>
            <h6 className={ styles.desc }>{ previewText }</h6>
            <button className={ `${styles[`btn${variation}`]}` }>Details</button>
            <img className={ styles.lowerCurve } src={ `/res/imgs/lower-curve-${variation}.svg` } />
        </div>
    )
}

export default CardWithCurves