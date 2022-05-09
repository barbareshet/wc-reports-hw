import styles from "../../styles/tableHeader.module.scss"
import Button from '@mui/material/Button';
function TableHeader({title}) {
    function handleClick(e) {
        console.log(e);
    }
    return (
        <div className={styles.tableHeader}>
            <div className={styles.right}>
                <h1 className={styles.tableTitle}>{title}</h1>
            </div>
            <div className={styles.left}>
                <Button variant="outlined"
                        className={styles.button}
                        onClick={handleClick}
                >ייצוא</Button>
            </div>
        </div>
    );
}

export default TableHeader;