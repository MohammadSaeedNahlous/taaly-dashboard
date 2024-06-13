import React from 'react'
import styles from './style.module.css'
import Link from 'next/link'

const SideNav = () => {
    return (
        <nav className={ styles.main }>
            <div className='h-100 d-flex align-items-start justify-content-between flex-column' style={ { width: '90%' } }>

                <ul className='w-100'>
                    <li className={ styles.listItemActive }><Link href={ '/' }><img src='/res/icons/computer-desktop.svg' /> <h3>Monitoring</h3></Link></li>
                    <li className={ styles.listItem }>
                        <Link href={ '/' }><img src='/res/icons/users.svg' /> <h3>Matching</h3></Link></li>
                    <li className={ styles.listItem }><Link href={ '/' }><img src='/res/icons/clipboard-document-list.svg' /> <h3>Reporting</h3></Link></li>
                    <li className={ styles.listItem }><Link href={ '/' }><img src='/res/icons/building-library.svg' /> <h3>Organizations</h3></Link></li>
                    <li className={ styles.listItem }><Link href={ '/' }><img src='/res/icons/academic-cap.svg' /> <h3>Projects</h3></Link></li>
                    <li className={ styles.listItem }><Link href={ '/' }><img src='/res/icons/book-open.svg' /> <h3>Learning tracks</h3></Link></li>
                </ul>

                <div className='d-flex align-items-start justify-content-center flex-column w-100 mb-5'>

                    <div className={ styles.listItem }><Link href={ '/' }><img src='/res/icons/cog-6-tooth.svg' /> <h3>Settings</h3></Link></div>
                    <div className={ styles.listItem }><Link href={ '/' }><img src='/res/icons/question-mark-circle.svg' /> <h3>Help</h3></Link></div>
                </div>
            </div>

        </nav>
    )
}

export default SideNav