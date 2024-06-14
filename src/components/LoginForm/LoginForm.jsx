import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styles from './style.module.css'
import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '@/src/lib/firebase';
import { useRouter } from 'next/router';
import ForgetPasswordModal from '../ForgetPasswordModal/ForgetPasswordModal';
import { useUser } from '@/src/contexts/UserContext';
import { doc, getDoc } from 'firebase/firestore';


const LoginForm = () => {

    const router = useRouter()
    const { setUser } = useUser()

    const [isLoading, setIsLoading] = useState(false)
    const [showModal, setshowModal] = useState(false)
    const [errorState, setErrorState] = useState(null)
    const [successMessage, setSuccessMessage] = useState(null)

    const [showpassword, setShowpassword] = useState(false)

    const [creds, setCreds] = useState({
        'email': '',
        'password': ''
    })

    const [resetPasswordEmail, setResetPasswordEmail] = useState('')

    const onChangeHandler = (e) => {
        setCreds({ ...creds, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {

                // console.log(user)
                // setUser(user);
                // router.replace('/dashboard')
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        setErrorState(null)


        try {
            signInWithEmailAndPassword(auth, creds.email, creds.password)
                .then((cred) => {

                    // console.log(cred.user.accessToken)
                    const token = cred.user.getIdToken().then(res => {
                        document.cookie = `token=${res}; path=/`;
                    })


                    const uid = cred.user.uid;
                    const userDocRef = doc(db, 'users', uid);

                    return getDoc(userDocRef);

                })
                .then((docSnap) => {
                    if (docSnap.exists()) {

                        setUser(docSnap.data())
                        router.replace('/dashboard');
                        // console.log('User data:', docSnap.data());

                    } else {
                        console.log('No such document!');
                    }
                })
                .catch((error) => {
                    console.error("Error signing in or fetching user data:", error);
                });


            // Redirect to dashboard or another protected page
            // router.replace('/dashboard');
        } catch (err) {
            setErrorState(err.message)
            // setError(err.message);
        } finally {
            setIsLoading(false)
        }
    };

    const handleResetPassword = async () => {
        try {
            await sendPasswordResetEmail(auth, resetPasswordEmail);
            setSuccessMessage('Password reset email sent. Check your inbox.');
            setErrorState(null);
        } catch (error) {
            setErrorState(error.message);
            setSuccessMessage(null);
        }
    };




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
                        <h1>Login here</h1>
                    </div>
                    <form onSubmit={ handleLogin } className='w-100'>
                        <div className={ styles.formControlContainer }>
                            <label for="exampleInputPassword1" className="form-label mt-4">Email</label>
                            <input onChange={ onChangeHandler } value={ creds.email } name='email' type="email" className="form-control" placeholder="Exmaple@mail.com" autoComplete="on" />
                            <img className={ styles.icon } src="/res/icons/at-symbol-form.svg" alt="" />
                        </div>
                        <div className={ styles.formControlContainer }>
                            <label for="exampleInputPassword1" className="form-label mt-4">Password</label>
                            <input onChange={ onChangeHandler } value={ creds.password } name='password' type={ showpassword ? "text" : "password" } className="form-control" placeholder="Password" autoComplete="off" />
                            <img style={ { cursor: 'pointer' } }
                                onClick={ () => setShowpassword(prev => !prev) }
                                className={ styles.icon } src={ `/res/icons/${!showpassword ? 'eye-slash-form.svg' : 'open-eye.png'}` } alt="" />
                        </div>
                        <div className='d-flex align-items-center justify-content-center flex-column my-2 position-relative'>
                            <small className='my-2' style={ { cursor: 'pointer' } } onClick={ () => setshowModal(true) }>Forget Password?</small>
                            <button disabled={ !creds.email || !creds.password } className={ styles.loginBtn }>
                                { isLoading ? <div className="spinner-border text-light" role="status">

                                </div> : 'Login' }</button>
                            { errorState != null && <div className={ "alert alert-danger " + styles.alert } role="alert">
                                { errorState == "Firebase: Error (auth/invalid-credential)." ? "Wrong Credintals" : errorState }
                            </div> }


                        </div>
                    </form>



                </div>
                <img src={ '/res/imgs/wave.svg' } className='w-100' />




                <ForgetPasswordModal isOpen={ showModal } onClose={ () => setshowModal(false) }>
                    <div className='d-flex align-items-center justify-content-start flex-column postition-relative p-3' style={ { width: '400px', height: '350px' } }>
                        <h1 className='text-center my-3'>Reset Password</h1>
                        <div className={ styles.formControlContainer + " my-3" }>
                            <label for="exampleInputPassword1" className="form-label mt-4">Email</label>
                            <input onChange={ (e) => setResetPasswordEmail(e.target.value) } name='email' type="email" className="form-control" placeholder="Exmaple@mail.com" autoComplete="on" />
                            <img className={ styles.icon } src="/res/icons/at-symbol-form.svg" alt="" />
                        </div>



                        <button onClick={ () => {
                            if (successMessage == null) {
                                handleResetPassword()
                            } else {
                                setshowModal(false)
                            }
                        } } disabled={ !resetPasswordEmail } className={ styles.loginBtn }>
                            { successMessage ? 'Close' : 'Send Email' }</button>
                        { successMessage != null && <div className={ "alert alert-success " + styles.alert2 } role="success">
                            { successMessage }
                        </div> }
                    </div>



                </ForgetPasswordModal>
            </div>

        </div>
    )
}

export default LoginForm