import {useContext} from "react";
import {DarkModeContextProvider} from "../context/darkmodeContext";
import Layout from "../components/layout/Layout";
import '../styles/globals.scss'
import '../styles/dark.scss'

function MyApp({ Component, pageProps }) {

  return (
      <DarkModeContextProvider>
          <Layout>
              <Component {...pageProps} />
          </Layout>
      </DarkModeContextProvider>
  )
}

export default MyApp
