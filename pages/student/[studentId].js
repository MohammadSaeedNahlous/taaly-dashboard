import React, { useEffect, useState } from 'react'
import styles from '../../styles/StudentPage.module.css'
import StudentInfoCol from '@/src/components/StudentInfoCol/StudentInfoCol'
import Snackbar from '@/src/components/Snackbar/Snackbar'
import CircularProgressCard from '@/src/components/CircularProgressCard/CircularProgressCard'
import MeassureCard from '@/src/components/MeassuresCard/MeassureCard'
import { collection, doc, getDoc } from 'firebase/firestore'
import { db } from '@/src/lib/firebase'
import { useRouter } from 'next/router'
import Layout from '@/src/components/Layout/Layout'
import StudentTopCards from '@/src/components/studentTopCards/StudentTopCards'
import CircularProgressCard2 from '@/src/components/CircularProgressCard2/CircularProgressCard2'
import withAuth from '@/src/utils/functions/HOC/withAuth'





const StudentPage = ({ data }) => {
    console.log(data)
    // const { query } = useRouter()
    // const [data, setData] = useState(null)
    // const [loading, setLoading] = useState(true)
    // const [error, setError] = useState(null)


    // const getLearnerById = async (id) => {
    //     const docRef = doc(db, 'learners', id);
    //     const docSnap = await getDoc(docRef);

    //     if (docSnap.exists()) {
    //         console.log({ ...docSnap.data(), id: docSnap.id })
    //         return { ...docSnap.data(), id: docSnap.id };

    //     } else {
    //         console.log('No such document!');
    //         return null;
    //     }
    // };
    // useEffect(() => {
    //     if (query.studentId) {
    //         getLearnerById(query.studentId)
    //     }
    // }, [query.studentId])

    return (
        <main className={ styles.main }>
            <div style={ { width: '25%' } } className='w'>
                <StudentInfoCol img={ data?.img } name={ data?.name }
                    studies={ data?.studies }
                    email={ data?.email }
                    mobile={ data?.mobile }
                    bio={ data?.bio }
                    workExp={ data?.workExp }
                    location={ data?.location } />
            </div>
            <div style={ { width: '75%' } } className='d-flex align-items-center justify-content-start flex-column'>
                <div className='w-100'>
                    <StudentTopCards />
                </div>

                <div style={ { height: '600px' } } className='d-flex align-items-start justify-content-between my-3 w-100'>
                    <div style={ { width: '35%', height: '100%' } }
                        className='d-flex align-items-center justify-content-between flex-column h-100 '>
                        <div className={ styles.cardContainer }>
                            <CircularProgressCard
                                CircularProgressWidthPercent={ 50 }
                                innerTextColor={ '#1e01b8' }
                                innerTextComponent={ <>
                                    <h1 className={ styles.innerTextCircular }>200</h1>
                                    <h1 className={ styles.innerTextCircular }>Hours</h1>
                                </> }
                                percent={ 90 }
                                strokeColor={ '#1e01b8' }
                                textComponent={ <p className={ styles.cardDesc }>Hours spent by Learner over this program.</p> }
                                titleComponent={ <h1 className={ styles.titleText }>Hours Spent</h1> }
                                trailColor={ '#988bde' }
                            />
                        </div>
                        <div style={ { marginTop: '1px' } } className={ styles.cardContainer }>
                            <CircularProgressCard
                                CircularProgressWidthPercent={ 50 }
                                innerTextColor={ '#b5e13d' }
                                innerTextComponent={ <>
                                    <h1 className={ styles.innerTextCircular2 }>200</h1>
                                    <h1 className={ styles.innerTextCircular2 }>Hours</h1>
                                </> }
                                percent={ 90 }
                                strokeColor={ '#b5e13d' }
                                textComponent={ <p className={ styles.cardDesc }>Hours spent by Learner over this program.</p> }
                                titleComponent={ <h1 className={ styles.titleText1 }>Credit Spent</h1> }
                                trailColor={ '#dcfa05' }
                            />
                        </div>


                    </div>
                    <div style={ { width: '63%', height: '100%' } }>
                        <MeassureCard />


                    </div>

                </div>
            </div>

        </main>
    )
}








export async function getServerSideProps(ctx) {

    const { query } = ctx

    const docRef = doc(db, 'learners', query.studentId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log({ ...docSnap.data(), id: docSnap.id })
        return {
            props: {
                data: { ...docSnap.data(), id: docSnap.id }
            }
        };

    } else {
        console.log('No such document!');
        return {
            props: {
                data: null
            }
        }
    }
}


// Wrap the component with withAuth HOC
const ProtectedStudentPage = withAuth(StudentPage);

// Attach the getLayout function to the wrapped component
ProtectedStudentPage.getLayout = function getLayout(page) {
    return (
        <Layout showHeader={ true }>
            { page }
        </Layout>
    );
};

export default ProtectedStudentPage;
