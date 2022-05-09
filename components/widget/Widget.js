import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import styles from "../../styles/widget.module.scss"

function Widget({type, arrowDirection}) {
    let widgetData;
    const amount = 100;
    const diff = 20;
    switch (type) {
        case "users":
            widgetData = {
                title: "משתמשים",
                isMoney: false,
                link: "כל המשתמשים",
                icon: (
                    <GroupOutlinedIcon
                        className="icon"
                        style={{
                            color: "crimson",
                            // backgroundColor: "rgba(255, 0, 0, 0.2)",
                        }}
                    />
                ),
            };
            break;
        case "orders":
            widgetData = {
                title: "הזמנות",
                isMoney: false,
                link: "כל ההזמנות",
                icon: (
                    <ShoppingCartOutlinedIcon
                        className="icon"
                        style={{
                            // backgroundColor: "rgba(218, 165, 32, 0.2)",
                            color: "goldenrod",
                        }}
                    />
                ),
            };
            break;
        case "earning":
            widgetData = {
                title: "רווחים",
                isMoney: true,
                link: "פרטים נוספים",
                icon: (
                    <MonetizationOnOutlinedIcon
                        className="icon"
                        style={{
                            // backgroundColor: "rgba(0, 128, 0, 0.2)",
                            color: "green"
                        }}
                    />
                ),
            };
            break;
        case "balance":
            widgetData = {
                title: "מאזן",
                isMoney: true,
                link: "פרטים נוספים",
                icon: (
                    <AccountBalanceWalletOutlinedIcon
                        className="icon"
                        style={{
                            // backgroundColor: "rgba(128, 0, 128, 0.2)",
                            color: "purple",
                        }}
                    />
                ),
            };
            break;
        default:
            break;
    }

    return (
        <div className={styles.widget}>
            <div className={styles.right}>
                <span className={styles.title}>{widgetData.title}</span>
                <span className={styles.counter}>
                    {amount} {widgetData.isMoney && "₪"}
                </span>
                <span className={styles.link}>{widgetData.link}</span>
            </div>
            <div className={styles.left}>
                <div className={[styles.percentage, arrowDirection]}>
                    {arrowDirection === 'negative' ? <KeyboardArrowDownOutlinedIcon/> : <KeyboardArrowUpOutlinedIcon/> }
                    {diff} %
                </div>
                {widgetData.icon}
            </div>
        </div>
    );
}

export default Widget;