import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import awards from "../../data/awards";

const columns = [
    { field: 'award', headerName: 'Sort by', flex: 4 }
];


export default function Award() {
    return (
        <div style={{ height: 400, width: '100%', margin: 'auto', marginTop:'30px' }}>
            <h3 style={{ textAlign: 'left' }}>Awards</h3>
            <DataGrid
                rows={awards}
                columns={columns}
                autoHeight
                disableHeader
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
