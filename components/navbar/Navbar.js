import {useContext} from "react";
import Image from "next/image";
import {DarkModeContext} from "../../context/darkmodeContext";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import styles from "../../styles/navbar.module.scss"


function Navbar(props) {

    const {dispatch} = useContext(DarkModeContext);

    return (
        <nav className={styles.navbar}>
            <div className={styles.wrapper}>
                <div className={styles.search}>
                    <input type="text" placeholder="Search..." />
                    <SearchOutlinedIcon />
                </div>
                <div className={styles.items}>

                    <div className={styles.item} onClick={ () => dispatch({type:"TOGGLE"})}>
                        <DarkModeOutlinedIcon
                            className="icon"
                        />
                    </div>
                    <div className={styles.item}>
                        <FullscreenExitOutlinedIcon className="icon" />
                    </div>
                    <div className={styles.item}>
                        <NotificationsNoneOutlinedIcon className="icon" />
                        <div className={styles.counter}>1</div>
                    </div>
                    <div className={styles.item}>
                        <ChatBubbleOutlineOutlinedIcon className="icon" />
                        <div className={styles.counter}>2</div>
                    </div>
                    <div className={styles.item}>
                        <ListOutlinedIcon className="icon" />
                    </div>
                    <div className={styles.item}>

                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;