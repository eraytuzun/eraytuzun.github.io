import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import memberships from "../../data/memberships";

const columns = [
    { field: 'membership', headerName: 'Sort by', flex: 4 }
];


export default function MembershipsDataGrid() {
    return (
        <div style={{ height: 400, width: '100%', margin: 'auto', marginTop:'40px' }}>
            <h3 style={{ textAlign: 'left' }}>Professional Memberships</h3>
            <DataGrid
                rows={memberships}
                columns={columns}
                autoHeight
                disableColumnMenu
                disableColumnSelector
                hideFooter
                components={{
                    NoRowsOverlay: () => <div style={{ background: '#f1f1f1', width: '100%', textAlign: 'center' }}>No data</div>
                }}
            />
        </div>
    );
}
