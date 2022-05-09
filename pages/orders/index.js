import axios from "axios";
import DataTable from "../../components/dataTable/DataTable";
import TableHeader from "../../components/global/TableHeader";
function OrdersIndex({ordersList}) {
    // console.log(ordersList);
    return (
        <div>
            <TableHeader title="כל ההזמנות"/>
            <DataTable list={ordersList}/>
        </div>
    );
}

export default OrdersIndex;

export async function getStaticProps() {

    const res = await axios.get(`${process.env.NEXT_PUBLIC_SITE_URL}/api/orders`);
    // console.log(res);
    const orders = await res.data;

    return{
        props: {
            ordersList: orders,
        }
    }
}