import React from 'react'
import styles from './styles.module.css'
import Snackbar from '../Snackbar/Snackbar'
const StudentTopCards = () => {
    return (
        <div className='d-flex align-items-start justify-content-between w-100'>
            <div className={ styles.card }>
                <h3>Mother Language</h3>
                <div className='w-100 align-items-center justify-content-start d-flex flex-wrap'>
                    <Snackbar icon={ '/res/icons/Flag Saudi Arabia.svg' } word={ 'Arabic' } />
                </div>

            </div>
            <div className={ styles.card }>
                <h3>Other Languages</h3>
                <div className='w-100 align-items-center justify-content-start d-flex flex-wrap'>
                    <Snackbar icon={ '/res/icons/Flag Saudi Arabia.svg' } word={ 'Arabic' } />
                    <Snackbar icon={ '/res/icons/Flag Saudi Arabia.svg' } word={ 'Arabic' } />
                </div>

            </div>
            <div className={ styles.card }>
                <h3>Level</h3>
                <div className='w-100 align-items-center justify-content-start d-flex flex-wrap'>
                    <Snackbar icon={ '/res/icons/Flag Saudi Arabia.svg' } word={ 'Arabic' } />

                </div>

            </div>

            <div className={ styles.card }>
                <h3>Other Languages</h3>
                <div className='w-100 align-items-center justify-content-start d-flex flex-wrap'>
                    <Snackbar icon={ '/res/icons/Flag Saudi Arabia.svg' } word={ 'Arabic' } />
                    <Snackbar icon={ '/res/icons/Flag Saudi Arabia.svg' } word={ 'Arabic' } />
                </div>

            </div>

        </div>
    )
}

export default StudentTopCards