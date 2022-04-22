import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from "react-redux";

const ShowData = () => {

    const { formInfo } = useSelector((state) => state.formInfo);

    const columns = [
        { field: 'id', headerName: 'ID', sortable: false, width: 150, flex: 0.5, selectable: false },
        { field: 'name', headerName: 'Name', sortable: false, width: 150, flex: 0.5 },
        { field: 'stateName', headerName: 'State', sortable: false, width: 150, flex: 0.5 },
        { field: 'adminType', headerName: 'Administration Type', sortable: false, width: 150, flex: 0.5 },
        { field: 'propertyLand', headerName: 'Property | Land', sortable: false, width: 150, flex: 0.5, },
        { field: 'location', headerName: 'Location', sortable: false, width: 150, flex: 0.5, },
        { field: 'taxesType', headerName: 'Taxes', sortable: false, width: 150, flex: 0.5, },
        { field: 'tax', headerName: 'Tax', sortable: false, width: 150, flex: 0.5, },
    ];

    const rows = [];

    formInfo &&
        formInfo.forEach((item, index) => {
            rows.push({
                id: index + 1,
                name: item.name,
                stateName: item.stateName,
                adminType: item.adminType,
                propertyLand: item.propertyLand,
                location: item.location,
                taxesType: item.taxesType,
                tax: item.tax,
            })
        })

    return (
        <>
            <div style={{ height: 400, width: '90%', margin: '4rem 4rem 2rem 5rem ' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                />
            </div>
        </>
    )
}

export default ShowData