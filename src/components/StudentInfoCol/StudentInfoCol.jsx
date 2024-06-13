import React from 'react'
import styles from './styles.module.css'
import Link from 'next/link'

const StudentInfoCol = ({ name, img, email, mobile, location, workExp, studies, bio }) => {
    return (
        <div className={ styles.main }>
            <div className='d-flex align-items-center justify-content-between w-100'>
                <Link href='/dashboard'>
                    <img src={ '/res/icons/arrow-left.svg' } alt='Go back' />
                </Link>
                <h2 className={ `${styles.name} mx-auto` }>{ name }</h2>
            </div>
            <div className='d-flex align-items-center justify-content-center flex-column p-3'>
                <img className={ styles.profileImg } src={ img } />
                <h3 className='my-3'>Bio</h3>
                <p className={ styles.bioText }>
                    { bio }
                </p>

                <div className={ 'd-flex justify-content-center align-items-start w-100 flex-column ' + styles.dataCol }>

                    <div className='d-flex align-items-start justify-content-center flex-column mb-2'>
                        <div className='d-flex align-items-center justify-content-center mb-2'>
                            <img src='/res/icons/at-symbol.svg' />
                            <h3>E-mail</h3>
                        </div>
                        <h6>
                            { email }
                        </h6>

                    </div>

                    <div className='d-flex align-items-start justify-content-center flex-column mb-2'>
                        <div className='d-flex align-items-center justify-content-center mb-2'>
                            <img src='/res/icons/phone.svg' />
                            <h3>Mobile</h3>
                        </div>
                        <h6>
                            { mobile }
                        </h6>

                    </div>
                    <div className='d-flex align-items-start justify-content-center flex-column mb-2'>
                        <div className='d-flex align-items-center justify-content-center mb-2'>
                            <img src='/res/icons/map-pin.svg' />
                            <h3>Location</h3>
                        </div>
                        <h6>
                            { location }
                        </h6>

                    </div>
                    <div className='d-flex align-items-start justify-content-center flex-column mb-2'>
                        <div className='d-flex align-items-center justify-content-center mb-2'>
                            <img src='/res/icons/academic-cap-black.svg' />
                            <h3>Highest Education</h3>
                        </div>
                        <h6>
                            { studies }
                        </h6>

                    </div>

                    <div className='d-flex align-items-start justify-content-center flex-column mb-2'>
                        <div className='d-flex align-items-center justify-content-center mb-2'>
                            <img src='/res/icons/briefcase.svg' />
                            <h3>Latest work experience</h3>
                        </div>
                        <h6>
                            { workExp }
                        </h6>

                    </div>


                </div>
            </div>




        </div>
    )
}

export default StudentInfoCol