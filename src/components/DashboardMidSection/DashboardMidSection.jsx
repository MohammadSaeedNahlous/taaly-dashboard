import React from 'react'
import InformationCard from '../InformationCard/InformationCard'
import styles from './styles.module.css'
import LearnersTable from '../LearnersTable/LearnersTable'
import CardWithCurves from '../CardWithCurves/CardWithCurves'
import Slider from 'react-slick';
import Image from 'next/image'
import OrgsCardsSlider from '../OrgsCardsSlider/OrgsCardsSlider'
const DashboardMidSection = () => {


    return (
        <div className={ styles.main }>
            <div className='w-100 d-flex align-items-center justify-content-between flex-wrap'>
                <InformationCard data={ 12 } icon={ '/res/icons/user-group.svg' } text={ 'Total Learners' } />
                <InformationCard data={ 12 } icon={ '/res/icons/user-group.svg' } text={ 'Total Language Buddies' } />
                <InformationCard data={ 12 } icon={ '/res/icons/building-library-grey.svg' } text={ 'Total Organizations' } />
                <InformationCard data={ 12 } icon={ '/res/icons/academic-cap-grey.svg' } text={ 'Total Projects' } />

            </div>
            <div className={ styles.tableContainer }>
                <LearnersTable />
            </div>
            <OrgsCardsSlider />
        </div>
    )
}

export default DashboardMidSection