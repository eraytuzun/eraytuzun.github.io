import React from 'react';
import Grid from "@mui/material/Grid";
import awards from "../../data/awards";



const gridItemStyle = {
    borderBottom: '1px solid #e0e0e0', // Adding bottom border to grid items
    padding: '10px 0', // Adding some padding for spacing
    transition: 'background-color 0.3s', // Adding transition for smooth hover effect
    cursor: 'pointer', // Changing cursor to pointer on hover
};


export default function Award() {
    return (
        <>
            <h3 style={{textAlign: 'center'}}>Awards</h3>
            <Grid container columns={{xs: 12, sm: 12, md: 12}}  spacing={1}>
                {awards.map((item, index) => (
                    <Grid container spacing={1} alignItems="center"
                          style={gridItemStyle}
                          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#f5f5f5"}
                          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "inherit"}
                    >
                        <Grid item xs={12} sm={12} md={12} >
                            <div>{item.award}</div>
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}
