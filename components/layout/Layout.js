
import Head from "next/head";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import styles from "../../styles/Layout.module.scss"
import {useContext} from "react";
import {DarkModeContext} from "../../context/darkmodeContext";


function Layout({title, keywords, description, children}) {
    const {darkMode} = useContext(DarkModeContext);
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords}/>
            </Head>
            <div className={darkMode ? "app dark" : "app"}>
                <div className={styles.appContainer}>
                    <Sidebar/>
                    <main className={styles.mainContainer}>
                        <Navbar/>
                        {children}
                    </main>
                </div>
            </div>
        </div>
    );
}
Layout.defaultProps = {
    title: 'WC Reports',
    description: 'WC dashboard',
    keywords: 'WC, Dashbord'
}
export default Layout;