import React from 'react'
import styles from './styles.module.css'
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';



const CircularProgressCard = ({ titleComponent, textComponent, percent,
    innerTextComponent, strokeColor, trailColor, innerTextColor, CircularProgressWidthPercent }) => {
    return (
        <div className={ styles.main }>
            { titleComponent }
            { textComponent }
            <div style={ { width: `${CircularProgressWidthPercent}%` } }>
                <CircularProgressbarWithChildren
                    styles={ buildStyles({
                        // Customize the path (stroke) color
                        pathColor: strokeColor,
                        // Customize the text color
                        textColor: innerTextColor,
                        // Customize the trail color
                        trailColor: trailColor,
                        // Customize the background color
                        // backgroundColor: '#3e98c7',
                    }) } value={ percent }>

                    { innerTextComponent }
                </CircularProgressbarWithChildren>
            </div>


        </div>
    )
}

export default CircularProgressCard