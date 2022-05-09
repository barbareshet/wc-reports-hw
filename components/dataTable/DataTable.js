import styles from "../../styles/dataTable.module.scss"
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../pages/api/orders/datatablesource"

function DataTable({list}) {


    const {orders} = list
    console.log(orders)
    // console.log(users);
    const actionColumn = [{
        field: "action",
        headerName:"פעולה",
        width:200,
        renderCell: () => {
            return (
                <div className="cellAction">
                    <div className="viewButton">עוד</div>
                    <div className="deleteButton">מחק</div>
                </div>
            )
        }}]
    return (
        <div className={styles.datatable}>
            <DataGrid
                className={styles.datagrid}
                rows={orders}
                columns={userColumns.concat(actionColumn)}
                pageSize={50}
                rowsPerPageOptions={[5]}
                checkboxSelection
                rowHeight={150}
            />
        </div>
    );
}

export default DataTable;