import { db } from '@/src/lib/firebase'

import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect } from 'react'

const home = () => {
    // const collectioRef = collection(db, 'orgs')
    // const orgsCollectionSnapShot = await getDocs(collectioRef)

    // console.log(orgsCollectionSnapShot)

    // const list = orgsCollectionSnapShot.docs.map((doc) => ({
    //     ...doc.data(), id: doc.id
    // }))
    // console.log(list)

    return (
        <div>home</div>
    )
}

export default home