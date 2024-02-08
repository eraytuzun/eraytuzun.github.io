import React from 'react';
import {DataGrid} from '@mui/x-data-grid';
import internationalConferences from '../../data/internationaConferences'

const columns = [
    {field: 'role', headerName: 'Role', flex: 1, wrap: true},
    {field: 'conference', headerName: 'Conference', flex: 2, wrap: true},
    {field: 'year', headerName: 'Year', flex: 1, wrap: true},
];


export default function InternationalConference() {
    return (
        <div style={{height: 'auto', width: '100%', margin: 'auto'}}>
            <h3 style={{textAlign: 'left'}}>Organizing Committee Member of International Conferences</h3>
                <DataGrid
                    rows={internationalConferences}
                    columns={columns}
                    autoHeight
                    disableColumnMenu
                    disableColumnSelector
                    hideFooter
                    multiline
                    components={{
                        NoRowsOverlay: () => <div style={{background: '#f1f1f1', width: '100%', textAlign: 'center'}}>No
                            data</div>
                    }}
                    rowStyle={{
                        background: 'linear-gradient(90deg, #e6e6e6 50%, transparent 50%)',
                    }}
                />
        </div>
    );
}
