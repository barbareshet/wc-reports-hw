import styles from "../../styles/sidebar.module.scss"
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import {useContext} from "react";
import {DarkModeContext} from "../../context/darkmodeContext";

import Link from "next/link"
function Sidebar(props) {

    const {dispatch} = useContext(DarkModeContext);
    return (
        <aside className={styles.sidebar}>
            <div className={styles.top}>
                <Link href="/" style={{textDecoration: "none"}}>
                    <span className={styles.logo}>Logo</span>
                </Link>
            </div>
            <hr/>
            <div className={styles.center}>
                <h4 className={styles.sidebarTitle}>ראשי</h4>
                <ul>
                    <li>
                        <Link href="/" style={{textDecoration: "none"}}>
                            <a>
                                <DashboardIcon className="icon"/>
                                <span>דאשבורד</span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/products" style={{textDecoration: "none"}}>
                            <a>
                                <CategoryOutlinedIcon className="icon"/>
                                <span>מוצרים</span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/orders" style={{textDecoration: "none"}}>
                            <a>
                                <BorderColorOutlinedIcon className="icon"/>
                                <span>הזמנות</span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/users" style={{textDecoration: "none"}}>
                            <a>
                                <GroupOutlinedIcon className="icon"/>
                                <span>משתמשים</span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/logout" style={{textDecoration: "none"}}>
                            <a>
                                <LoginOutlinedIcon className="icon"/>
                                <span>התחברות</span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/login" style={{textDecoration: "none"}}>
                            <a>
                                <LogoutOutlinedIcon className="icon"/>
                                <span>יציאה</span>
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={styles.bottom}>
                <h4 className={styles.sidebarTitle}>מצב</h4>
                <div className={styles.sidebarOptions}>
                    <div className={styles.colorOption} onClick={ () => dispatch({type:"LIGHT"})}>
                        <LightModeOutlinedIcon className="icon"/>
                    </div>
                    <div className={styles.colorOption} onClick={ () => dispatch({type:"DARK"})}>
                        <DarkModeIcon className="icon"/>
                    </div>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;