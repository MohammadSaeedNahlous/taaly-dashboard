import Head from 'next/head'
import styles from '../styles/LoginPage.module.css'
import LoginForm from '@/src/components/LoginForm/LoginForm'
import Layout from '@/src/components/Layout/Layout';
import { auth } from '@/src/lib/firebase';




export default function Home() {
  return (
    <>

      <Head>
        <title>Login - Taaly Dashboard</title>
        <meta name="description" content="Login to Taaly Dashboard to access your account, track your learning progress, and manage your settings." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main style={ { minHeight: '100vh' } } className={ 'd-flex align-items-center justify-content-center w-100 ' + styles.main }>
        <LoginForm />
      </main>
    </>
  )
}

Home.getLayout = function getLayout(page) {
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