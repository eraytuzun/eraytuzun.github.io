import React from 'react';
import journalReviewer from "../../data/journalReviewer";
import Grid from "@mui/material/Grid";

const columns = [
    {field: 'journal', headerName: 'Sort by', flex: 4}
];

const gridItemStyle = {
    borderBottom: '1px solid #e0e0e0', // Adding bottom border to grid items
    padding: '10px 0', // Adding some padding for spacing
    transition: 'background-color 0.3s', // Adding transition for smooth hover effect
    cursor: 'pointer', // Changing cursor to pointer on hover
};


export default function Journal() {
    return (
        <>
            <h3 style={{textAlign: 'center'}}>Journal Reviewer</h3>
            <Grid container columns={{xs: 12, sm: 12, md: 12}}  spacing={1}>
                {journalReviewer.map((item, index) => (
                    <Grid container spacing={1} alignItems="center"
                          style={gridItemStyle}
                          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#f5f5f5"}
                          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "inherit"}
                    >
                        <Grid item xs={12} sm={12} md={12} >
                            <div>{item.journal}</div>
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}
