import * as React from 'react';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import publicationSites from '../data/publicationSites';
import StarsIcon from '@mui/icons-material/Stars';


export default function PublicationSitesList() {
    return (
        <Grid container spacing={2} alignItems="center">
            {publicationSites.map((item, index) => (
                <Grid item xs={2} sm={2} md={2} lg={2} key={index}
                      style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <StarsIcon style={{color: '#3a3333'}}/>
                    <a href={item.link} target="_blank" rel="noopener noreferrer" style={{marginLeft: '10px'}}>
                        <ListItemText primary={item.site}/>
                    </a>
                </Grid>
            ))}
        </Grid>
    );
}
