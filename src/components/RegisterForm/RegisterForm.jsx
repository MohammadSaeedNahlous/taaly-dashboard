import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styles from './style.module.css'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '@/src/lib/firebase';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useUser } from '@/src/contexts/UserContext';
import { collection, doc, getDoc, setDoc } from 'firebase/firestore';


const RegisterForm = () => {

    const router = useRouter()
    const { registerUser, loadingSt, errorSt } = useUser()

    const [isLoading, setIsLoading] = useState(false)
    const [errorState, setErrorState] = useState(null)

    const [showpassword, setShowpassword] = useState(false)
    const [showpassword1, setShowpassword1] = useState(false)

    const [creds, setCreds] = useState({
        name: '',
        'email': '',
        'password': '',
        'password2': ''
    })

    const onChangeHandler = (e) => {
        setCreds({ ...creds, [e.target.name]: e.target.value })
    }

    // useEffect(() => {
    //     const checkAuth = async () => {
    //         const user = await auth.currentUser;
    //         if (user) {
    //             // router.push('/dashboard'); // Redirect signed-in users away from login page
    //         }
    //     };

    //     checkAuth();
    // }, [router]);

    // const createUserDocument = async (user, additionalData) => {
    //     try {
    //         console.log(2332)
    //         if (!user) return;
    //         console.log(3232323333)
    //         const userRef = await doc(db, `users/${user.uid}`);
    //         const snapshot = await getDoc(userRef)
    //         console.log(3232333444444444)

    //         if (!snapshot.exists) {
    //             const { email } = user;
    //             try {
    //                 await userRef.set({
    //                     email,
    //                     ...additionalData
    //                 });
    //             } catch (error) {
    //                 console.error("Error creating user document:", error);
    //                 setError("Failed to create user data.");
    //             }
    //         }
    //         alert('apssed')
    //     } catch (error) {
    //         console.log(error)
    //     }

    // };


    const handleSignUp = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        setErrorState(null)
        try {
            createUserWithEmailAndPassword(auth, creds.email, creds.password)
                .then((cred) => {
                    return setDoc(doc(db, 'users', cred.user.uid), {
                        name: creds.name,
                        email: creds.email

                    });
                })
                .then(() => {
                    console.log('User document created');
                    router.push('/')
                })
                .catch((error) => {
                    console.error("Error creating user:", error);
                });

        } catch (err) {
            setErrorState(err.code)

        } finally {
            setIsLoading(false)
        }
    };

    // const handleSignUp = async (e) => {
    //     e.preventDefault()
    //     await registerUser(creds.email, creds.password, { name: creds.name });
    // };



    return (
        <div className={ 'd-flex align-items-center justify-content-center ' + styles.main }>
            <div className={ 'p-2 d-flex align-items-center justify-content-center flex-column w-50 h-100 ' + styles.sloganCol }>
                <Image src={ '/res/imgs/taaly-smile.svg' } width={ 200 } height={ 150 } />
                <p>
                    ‘Het verbinden van nieuwkomers met de samenleving door hun taal te verbeteren’
                </p>
            </div>
            <div className={ 'pt-4 w-50 h-100 d-flex align-items-center justify-content-between flex-column ' + styles.formCol }>
                <div className='d-flex align-items-center justify-content-center flex-column w-75 mx-auto'>
                    <div className={ 'd-flex align-items-start justify-content-start flex-column w-100 ' + styles.welcomeContainer } >
                        <h1>Welcome to <span>Taaly!</span></h1>
                        <h1>Signup here</h1>
                    </div>
                    <form onSubmit={ handleSignUp } className='w-100'>

                        <div className={ styles.formControlContainer }>
                            <label for="exampleInputPassword1" className="form-label mt-4">Name</label>
                            <input onChange={ onChangeHandler } name='name' type="text"
                                className="form-control" placeholder="Ex:John Doe" autoComplete="on" />
                            <img className={ styles.icon } src="/res/icons/name.png" alt="" />
                        </div>
                        <div className={ styles.formControlContainer }>
                            <label for="exampleInputPassword1" className="form-label mt-4">Email</label>
                            <input onChange={ onChangeHandler } name='email' type="email" className="form-control" placeholder="Exmaple@mail.com" autoComplete="on" />
                            <img className={ styles.icon } src="/res/icons/at-symbol-form.svg" alt="" />
                        </div>
                        <div className={ styles.formControlContainer }>
                            <label for="exampleInputPassword1" className="form-label mt-4">Password</label>
                            <input minLength={ 6 } onChange={ onChangeHandler }

                                name='password' type={ showpassword ? "text" : "password" } className="form-control"
                                placeholder="6+ strong characters " autoComplete="off" />
                            <img style={ { cursor: 'pointer' } }
                                onClick={ () => setShowpassword(prev => !prev) }
                                className={ styles.icon } src={ `/res/icons/${!showpassword ? 'eye-slash-form.svg' : 'open-eye.png'}` } alt="" />
                        </div>
                        <div className={ styles.formControlContainer }>
                            <label for="exampleInputPassword1" className="form-label mt-4">Repeat Password</label>
                            <input minLength={ 6 } onChange={ onChangeHandler } name='password1'
                                type={ showpassword1 ? "text" : "password" } className="form-control" placeholder="6+ strong characters " autoComplete="off" />
                            <img style={ { cursor: 'pointer' } }
                                onClick={ () => setShowpassword1(prev => !prev) }
                                className={ styles.icon } src={ `/res/icons/${!showpassword1 ? 'eye-slash-form.svg' : 'open-eye.png'}` } alt="" />
                        </div>
                        <div className='d-flex align-items-center justify-content-center flex-column my-2 position-relative'>
                            <small className='my-2'>Already have an account?<Link href={ '/' }> Login here!</Link></small>
                            <button className={ styles.loginBtn }>
                                { loadingSt ? <div className="spinner-border text-light" role="status">

                                </div> : 'Signup' }</button>
                            { errorState != null && <div className={ "alert alert-danger " + styles.alert } role="alert">
                                { errorState }
                            </div> }

                        </div>
                    </form>



                </div>
                <img src={ '/res/imgs/wave.svg' } className='w-100' />
            </div>

        </div>
    )
}

export default RegisterForm