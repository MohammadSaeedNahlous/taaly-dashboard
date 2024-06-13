import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styles from './style.module.css'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/src/lib/firebase';
import { useRouter } from 'next/router';


const LoginForm = () => {

    const router = useRouter()

    const [isLoading, setIsLoading] = useState(false)
    const [errorState, setErrorState] = useState(null)

    const [showpassword, setShowpassword] = useState(false)

    const [creds, setCreds] = useState({
        'email': '',
        'password': ''
    })

    const onChangeHandler = (e) => {
        setCreds({ ...creds, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        const checkAuth = async () => {
            const user = await auth.currentUser;
            if (user) {
                // router.push('/dashboard'); // Redirect signed-in users away from login page
            }
        };

        checkAuth();
    }, [router]);

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        setErrorState(null)


        try {
            const userCredential = await signInWithEmailAndPassword(auth, creds.email, creds.password);
            const token = await userCredential.user.getIdToken();
            document.cookie = `token=${token}; path=/`;

            // Redirect to dashboard or another protected page
            router.replace('/dashboard');
        } catch (err) {
            setErrorState(err.message)
            // setError(err.message);
        } finally {
            setIsLoading(false)
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
                            <label for="exampleInputPassword1" class="form-label mt-4">Email</label>
                            <input onChange={ onChangeHandler } name='email' type="email" class="form-control" placeholder="Exmaple@mail.com" autocomplete="on" />
                            <img className={ styles.icon } src="/res/icons/at-symbol-form.svg" alt="" />
                        </div>
                        <div className={ styles.formControlContainer }>
                            <label for="exampleInputPassword1" class="form-label mt-4">Password</label>
                            <input onChange={ onChangeHandler } name='password' type={ showpassword ? "text" : "password" } class="form-control" placeholder="Password" autocomplete="off" />
                            <img style={ { cursor: 'pointer' } }
                                onClick={ () => setShowpassword(prev => !prev) }
                                className={ styles.icon } src={ `/res/icons/${!showpassword ? 'eye-slash-form.svg' : 'open-eye.png'}` } alt="" />
                        </div>
                        <div className='d-flex align-items-center justify-content-center flex-column my-2 position-relative'>
                            <small className='my-2'>Forget Password?</small>
                            <button disabled={ !creds.email || !creds.password } className={ styles.loginBtn }>
                                { isLoading ? <div class="spinner-border text-light" role="status">

                                </div> : 'Login' }</button>
                            { errorState != null && <div className={ "alert alert-danger " + styles.alert } role="alert">
                                { errorState == "Firebase: Error (auth/invalid-credential)." ? "Wrong Credintals" : errorState }
                            </div> }

                        </div>
                    </form>



                </div>
                <img src={ '/res/imgs/wave.svg' } className='w-100' />
            </div>

        </div>
    )
}

export default LoginForm