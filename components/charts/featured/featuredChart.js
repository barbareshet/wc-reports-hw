import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import {CircularProgressbar} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"
import styles from "../../../styles/featuredChart.module.scss"
import CurrencySymbol from "../../global/CurrencySymbol";

function FeaturedChart(props) {
    return (
        <div className={styles.featuredChart}>
            <div className={styles.top}>
                <h3 className={styles.title}>סה"כ הכנסות</h3>
                <MoreVertOutlinedIcon fontSize="small"/>
            </div>
            <div className={styles.bottom}>
                <div className={styles.featuredChart}>
                    <CircularProgressbar value={70} text="70%" strokeWidth={5} />
                </div>
                <h4 className={styles.title}>רווחים יומיים</h4>
                <p className={styles.amount}><CurrencySymbol/>420</p>
                <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus ea iusto, ratione repellendus suscipit unde?</p>
                <div className={styles.summary}>
                    <div className={styles.item}>
                        <h5 className={styles.itemTitle}>יעדים</h5>
                        <div className={[styles.itemResult, styles.positive]}>
                            <KeyboardArrowUpOutlinedIcon fontSize="small"/>
                            <div className={styles.resultAmount}>
                                <CurrencySymbol/>15k
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <h5 className="itemTitle">שבוע</h5>
                        <div className="itemResult negative">
                            <KeyboardArrowDownOutlinedIcon fontSize="small"/>
                            <div className="resultAmount">
                                <CurrencySymbol/>1.4k
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <h5 className="itemTitle">חודש</h5>
                        <div className="itemResult positive">
                            <KeyboardArrowUpOutlinedIcon fontSize="small"/>
                            <div className="resultAmount">
                                <CurrencySymbol/>12.4k
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeaturedChart;