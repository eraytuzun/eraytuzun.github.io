import React from 'react';
import {DataGrid} from '@mui/x-data-grid';
import internationalConferences from '../../data/internationaConferences'; // Corrected typo in the import path
import Grid from "@mui/material/Grid";


const gridItemStyle = {
    borderBottom: '1px solid #e0e0e0', // Adding bottom border to grid items
    padding: '10px 0', // Adding some padding for spacing
    transition: 'background-color 0.3s', // Adding transition for smooth hover effect
    cursor: 'pointer', // Changing cursor to pointer on hover
};

export default function InternationalConference() {
    return (
        <>
            <h3 style={{textAlign: 'center'}}>Organizing Committee Member of International Conferences</h3><br/>
            <Grid container columns={{xs: 6, sm: 6, md: 12}} spacing={2}>
                {internationalConferences.map((item, index) => (
                    <Grid container
                          style={gridItemStyle}
                          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#f5f5f5"}
                          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "inherit"}>
                        <Grid item xs={3} sm={3} md={3}>
                            <div>{item.role}</div>
                        </Grid>
                        <Grid item xs={7} sm={7} md={7}>
                            <div style={{padding:'0 10px'}}>{item.conference}</div>
                        </Grid>
                        <Grid item xs={2} sm={2} md={2}>
                            <div>{item.year}</div>
                        </Grid>

                    </Grid>
                ))}
            </Grid>
        </>
    );
}
