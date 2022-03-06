import GlobalStyle from "../styles/GlobalStyle"
import Layout from '../components/Layout'

const Map = ({ Component, pageProps }) => {
  return (
  <>
    <GlobalStyle />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
  )
}

  export default Map

  //공통으로 적용되는 부분