import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import publicationSites from '../data/publicationSites';
import StarsIcon from '@mui/icons-material/Stars';


export default function PublicationSitesList() {
    return (
        <Grid container columns={{ xs:10, sm: 8, md: 12 }}>
            {publicationSites.map((item, index) => (
                <Grid item xs={5} sm={4} md={4} key={index} style={{display:"flex"}}>
                        <StarsIcon style={{color: '#3a3333'}}/>
                        <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ marginLeft: '10px'}}>
                            {item.site}
                        </a>
                </Grid>
                ))}
        </Grid>
    );
}
