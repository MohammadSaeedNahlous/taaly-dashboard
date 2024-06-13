import React from 'react'
import styles from './styles.module.css'
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar'
const AttendenceCard = ({ outerPercent, innerPercent }) => {
    return (
        <div className={ styles.main }>
            <h6 className={ styles.title }>Attendance</h6>
            <div style={ { width: '80%' } } className='mx-auto mb-3'>
                <CircularProgressbarWithChildren
                    styles={ buildStyles({
                        // Customize the path (stroke) color
                        pathColor: '#1f00b8',

                        // Customize the trail color
                        trailColor: '#988bde',
                        // Customize the background color
                        // backgroundColor: '#3e98c7',
                    }) } value={ outerPercent }>
                    <div style={ { width: '75%' } }>
                        <CircularProgressbarWithChildren
                            styles={ buildStyles({
                                // Customize the path (stroke) color
                                pathColor: '#b4e03d',

                                // Customize the trail color
                                trailColor: '#ddf0a4',

                            }) } value={ innerPercent }>

                            <img src='/res/icons/user-group.svg' />
                        </CircularProgressbarWithChildren>
                    </div>


                </CircularProgressbarWithChildren>
            </div>


            <div className={ 'w-100 d-flex align-items-center justify-content-between ' + styles.percentagesContainer }>
                <div className={ 'w-100 d-flex align-items-center justify-content-between flex-column h-100 ' + styles.learners }>
                    <h6 >Learners</h6>
                    <h5>{ outerPercent }%</h5>
                </div>
                <div className={ 'w-100 d-flex align-items-center justify-content-between flex-column h-100 ' + styles.buddies }>
                    <h6 >Language
                        Buddies</h6>
                    <h5>{ outerPercent }%</h5>
                </div>
            </div>


        </div>
    )
}

export default AttendenceCard