
import styles from "../styles/Home.module.scss"
import Widget from "../components/widget/Widget";
import FeaturedChart from "../components/charts/featured/featuredChart";
import MainChart from "../components/charts/mainChart/mainChart";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.widgets}>
          <Widget type="users"  arrowDirection="positive"/>
          <Widget type="orders"  arrowDirection="negative"/>
          <Widget type="earning"  arrowDirection="negative"/>
          <Widget type="balance"  arrowDirection="positive"/>
      </div>
      <div className={styles.charts}>
          <FeaturedChart/>
          <MainChart aspect="2/1" title="טבלה ראשית"/>
      </div>
      <div className={styles.listContainer}>
        <h3 className={styles.listTitle}>ראשי</h3>

      </div>
    </div>
  )
}
