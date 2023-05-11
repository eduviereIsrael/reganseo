// import '../styles/index.scss'
// import '../styles/navbar.scss'
import '../styles/globals.css'
import { Layout } from '../components';
import ReactGA from 'react-ga';


const TRACKING_ID = "G-EPCN6T7574";
ReactGA.initialize(TRACKING_ID);

function MyApp({ Component, pageProps }) {

  return( 
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
  
}

export default MyApp
