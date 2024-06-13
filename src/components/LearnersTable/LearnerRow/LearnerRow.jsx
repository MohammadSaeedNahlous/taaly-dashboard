import React from 'react'
import styles from './styles.module.css'
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import formatNumber from '@/src/utils/functions/percentageFromater';
import Link from 'next/link';
const LearnerRow = ({ id, img, name, level, program, org, rating, hrsSpent }) => {


    const percent = (Number(hrsSpent) / 10) * 100
    return (
        <tr className={ styles.row }>
            <td className={ 'd-flex align-items-center justify-content-start ' + styles.personalData }>
                <img src={ img } alt="" />
                <h6>{ name }</h6>
            </td>
            <td>{ level }</td>
            <td>{ program }</td>
            <td>{ org }</td>
            <td>{ rating }/10</td>
            <td className={ styles.ratingData }>
                <div>
                    <CircularProgressbarWithChildren
                        styles={ buildStyles({
                            // Customize the path (stroke) color
                            pathColor: `#000`,
                            // Customize the text color
                            textColor: '#000',
                            // Customize the trail color
                            trailColor: '#b0b1b8',
                            // Customize the background color
                            // backgroundColor: '#3e98c7',
                        }) } value={ percent }>

                        <small>{ formatNumber(hrsSpent) }</small>
                        <div style={ { fontSize: 12, marginTop: -5 } }>
                            /10h
                        </div>
                    </CircularProgressbarWithChildren>
                </div>    </td>
            <td>
                <Link className={ styles.viewLink } href={ `/student/${id}` }>View <span>&#8594;</span></Link>
            </td>
        </tr>
    )
}

export default LearnerRow