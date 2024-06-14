import AttendenceCard from '@/src/components/AttendenceCard/AttendenceCard'
import CircularProgressCard from '@/src/components/CircularProgressCard/CircularProgressCard'
import DashboardMidSection from '@/src/components/DashboardMidSection/DashboardMidSection'
import Header from '@/src/components/Header/Header'
import SideNav from '@/src/components/SideNav/SideNav'
import React from 'react'
import styles from '../styles/dashboard.module.css'
import Layout from '@/src/components/Layout/Layout'
import withAuth from '@/src/utils/functions/HOC/withAuth'
import Head from 'next/head'
const DashboardPage = () => {
    return (<>


        <Head>
            <title>Monitoring - Taaly</title>
            <meta name="description" content="Monitor learner progress and platform performance on Taaly. Track statistics, analyze data, and optimize learning experiences." />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <main className={ styles.main }>
            <SideNav />
            <DashboardMidSection />
            <div className='d-flex align-items-center justify-content-start flex-column' style={ { width: '15%' } }>
                <CircularProgressCard
                    CircularProgressWidthPercent={ 50 }
                    innerTextColor={ '#1f00b8' }
                    innerTextComponent={ <>
                        <h4 className={ styles.overallActivityInnerText }  >  200</h4>
                        <h4 className={ styles.overallActivityInnerText }  >  hours</h4> </> }
                    percent={ 75 }
                    strokeColor={ '#1f00b8' }
                    textComponent={ <p className={ styles.overallActivityText }>
                        Hours spent by organizations starting from January
                    </p> }
                    titleComponent={ <h6 style={ {
                        color: '#1f00b8', fontWeight: '800', alignSelf: 'start'
                    } }>
                        Overall Activity
                    </h6> }
                    trailColor={ '#988bde' }
                />

                <AttendenceCard outerPercent={ 75 } innerPercent={ 50 } />
                <div className={ styles.manageOrgsCard }>
                    <img src='/res/icons/cog-6-tooth-white.svg' />
                    <h6 className='text-center'>
                        Manage Organizations
                    </h6>
                </div>
            </div>
        </main></>
    )
}


// Wrap the component with withAuth HOC
const ProtectedDashboardPage = withAuth(DashboardPage);

// Attach the getLayout function to the wrapped component
ProtectedDashboardPage.getLayout = function getLayout(page) {
    return (
        <Layout showHeader={ true }>
            { page }
        </Layout>
    );
};

export default ProtectedDashboardPage;