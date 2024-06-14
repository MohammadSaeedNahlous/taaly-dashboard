import Head from 'next/head'
import styles from '../styles/LoginPage.module.css'
import LoginForm from '@/src/components/LoginForm/LoginForm'
import Layout from '@/src/components/Layout/Layout';
import RegisterForm from '@/src/components/RegisterForm/RegisterForm';
import { auth } from '@/src/lib/firebase';




export default function Register() {
    return (
        <>
            <Head>
                <title>Register - Taaly Dashboard</title>
                <meta name="description" content="Sign up for Taaly to start learning Dutch easily. Access interactive lessons and personalized learning experiences." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <main style={ { minHeight: '100vh' } } className={ 'd-flex align-items-center justify-content-center w-100 ' + styles.main }>
                <RegisterForm />
            </main>
        </>
    )
}

Register.getLayout = function getLayout(page) {
    return (
        <Layout showHeader={ false }>
            { page }
        </Layout>
    );
};

export async function getServerSideProps(context) {
    const { req, res } = context;

    try {
        const cookies = req.headers.cookie;
        if (cookies) {
            // Check if user is authenticated based on cookies or Firebase session
            const user = await auth.currentUser;
            if (user) {
                return {
                    redirect: {
                        destination: '/dashboard',
                        permanent: false,
                    },
                };
            }
        }

        return {
            props: {}, // No props needed for the login page
        };
    } catch (error) {
        console.error('Error checking authentication:', error);
        return {
            props: {}, // No props needed for the login page
        };
    }
}