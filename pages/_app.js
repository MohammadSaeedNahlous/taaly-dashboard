import Header from '@/src/components/Header/Header';
import '@/styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component { ...pageProps } />);
}

export default MyApp;
