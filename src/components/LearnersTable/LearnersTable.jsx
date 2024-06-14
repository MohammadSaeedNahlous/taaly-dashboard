import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import LearnerRow from './LearnerRow/LearnerRow'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '@/src/lib/firebase'
import LoadingComponent from '../LoadingComponent/LoadingComponent'
const LearnersTable = () => {

    const [data, setData] = useState([])
    const [filterQuery, setFilterQuery] = useState('')


    const getLearners = async (searchTerm) => {
        const collectionRef = collection(db, 'learners');

        let queries;

        if (searchTerm.trim() === '') {
            // If the search term is empty, fetch all documents
            queries = [query(collectionRef)];
        } else {
            // Otherwise, run queries on multiple fields
            queries = [
                query(collectionRef, where('name', '==', searchTerm)),
                // Add more queries as needed for other fields
            ];
        }

        const results = await Promise.all(queries.map(q => getDocs(q)));

        // Combine results from all queries
        const combinedResults = [];
        results.forEach(result => {
            result.docs.forEach(doc => {
                combinedResults.push({ ...doc.data(), id: doc.id });
            });
        });

        // Remove duplicates if necessary
        const uniqueResults = Array.from(new Set(combinedResults.map(a => a.id)))
            .map(id => {
                return combinedResults.find(a => a.id === id);
            });

        setData(uniqueResults);
    };



    useEffect(() => {
        getLearners('')
    }, [])

    const onSubmitHandler = (e) => {
        e.preventDefault()
        getLearners(filterQuery)
    }

    const [currentDataType, setCurrentDataType] = useState('learners')
    return (
        <div className={ styles.main }>
            <div className={ styles.upperContainer }>
                <div className={ styles.tableSwitcher }>
                    <h6 onClick={ () => setCurrentDataType('learners') } className={ currentDataType == 'learners' ? styles.activeDataType : styles.dataType }>Learners</h6>
                    <span className={ styles.sepertor }></span>
                    <h6 onClick={ () => setCurrentDataType('language-buddies') } className={ currentDataType == 'language-buddies' ? styles.activeDataType : styles.dataType }>Language Buddies</h6>

                </div>
                <div className={ styles.searchBarContainer }>
                    <button className={ styles.settingsBtn }><img src='/res/icons/adjustments-horizontal.svg' /></button>
                    <form onSubmit={ onSubmitHandler }>
                        <input onChange={ (e) => setFilterQuery(e.target.value) } placeholder='Search by Name, Level, etc ' />
                        <button> <img src='/res/icons/magnifying-glass.svg' /></button>
                    </form>
                </div>
            </div>

            <div className={ styles.tableContainer }>
                { data.length == 0 ?
                    <div className='mt-4'><LoadingComponent small /></div> : <table style={ { width: '100%' } } className="table w-100">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Level</th>
                                <th scope="col">Program</th>
                                <th scope="col">Organization</th>
                                <th scope="col" style={ { width: '50px' } }>Rating</th>
                                <th scope="col">Hours spent</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            { data.map(item => (
                                <LearnerRow
                                    hrsSpent={ Number(item.hrsSpent) }
                                    img={ item.img }
                                    level={ item.level }
                                    org={ item.org }
                                    program={ item.program }
                                    name={ item.name }
                                    rating={ item.rating }
                                    id={ item.id }

                                />
                            )) }




                        </tbody>
                    </table> }
            </div>

        </div>
    )
}

export default LearnersTable