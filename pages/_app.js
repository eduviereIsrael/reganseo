import '../styles/globals.css'
import '../styles/index.scss'
import '../styles/navbar.scss'
import '../styles/pri-btn.scss'
import { Layout } from '../components'


function MyApp({ Component, pageProps }) {
  return( 
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
  
}

export default MyApp
