import React from 'react'
import styles from './styles.module.css'
import { useUser } from '@/src/contexts/UserContext'
const Header = () => {
    const { user } = useUser()

    return (
        <header className={ styles.header }>
            <div className={ styles.brandContainer }>
                <img src='/res/imgs/logo.svg' />
                <h6>Taaly</h6>
            </div>
            <form className={ styles.searchContainer }>
                <input className='form-control' placeholder='Search' />
                <button><img src='/res/icons/magnifying-glass.svg' /></button>
            </form>

            <div className={ styles.userInfoContainer }>
                <div className={ styles.notificationContainer }>
                    <img className={ styles.bellIcon } src='/res/icons/bell.svg' />
                    <span className={ styles.notificationDot }></span>
                </div>

                <h1>Hi, Mohammad Saeed!</h1>
                <img className={ styles.userImg } src='/res/imgs/profile-pic.svg' />
            </div>

        </header>
    )
}

export default Header