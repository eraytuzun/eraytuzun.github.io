import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import journalReviewer from "../../data/journalReviewer";

const columns = [
    { field: 'journal', headerName: 'Sort by', flex: 4 }
];

export default function Journal() {
    return (
        <div style={{ height: 400, width: '100%', margin: 'auto' }}>
            <h3 style={{ textAlign: 'left' }}>Journal Reviewer</h3>
            <DataGrid
                rows={journalReviewer}
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