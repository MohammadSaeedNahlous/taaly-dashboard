import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import Image from 'next/image'
import CardWithCurves from '../CardWithCurves/CardWithCurves';
import styles from './styles.module.css'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/src/lib/firebase';
const OrgsCardsSlider = () => {
    const [orgsState, setOrgsState] = useState([])

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={ styles.nextArrow }
                style={ { ...style, display: "block", background: "white" } }
                onClick={ onClick }
            >
                <Image
                    src={ "/res/icons/next-arrow.svg" }
                    alt="next-arrow"
                    height={ 24 }
                    width={ 24 }
                />
            </div>
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={ styles.prevArrow }
                style={ { ...style, display: "block", background: "white" } }
                onClick={ onClick }
            >
                <Image
                    src={ "/res/icons/prev-arrow.svg" }
                    alt="prev-arrow"
                    height={ 24 }
                    width={ 24 }
                />
            </div>
        );
    }

    const settings2 = {
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [


            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: false,
                },
            },
            {
                breakpoint: 530,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                },
            },
        ],
    };
    const [loading, setLoading] = useState(false)

    const getOrgs = async () => {
        setLoading(true)
        const collectioRef = collection(db, 'orgs')
        const orgsCollectionSnapShot = await getDocs(collectioRef)

        const list = orgsCollectionSnapShot.docs.map((doc) => ({
            ...doc.data(), id: doc.id
        }))
        setLoading(false)

        setOrgsState(list)
    }



    useEffect(() => {
        getOrgs()
    }, [])





    return (
        <div className='mt-3 w-100 position-relative'>
            <Slider { ...settings2 }>

                { orgsState.map((org, i) => (<CardWithCurves
                    variation={ (i % 3) + 1 }
                    location={ org.location }
                    name={ org.name }
                    previewText={ org.desc }

                />)) }

            </Slider>
        </div>
    )
}

export default OrgsCardsSlider