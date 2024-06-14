import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { UserProvider } from '@/src/contexts/UserContext';
import Layout from '@/src/components/Layout/Layout';

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => <Layout>{ page }</Layout>);

  return (
    <UserProvider>
      { getLayout(<Component { ...pageProps } />) }
    </UserProvider>
  );
}

export default MyApp;
