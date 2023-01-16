import '../styles/custom.scss'
import { SSRProvider } from 'react-bootstrap'
function MyApp({ Component, pageProps }) {
  return( 
    <SSRProvider>
      <Component {...pageProps} className="bodyy"/>
      </SSRProvider>
      )
}

export default MyApp
