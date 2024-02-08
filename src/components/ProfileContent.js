import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import {useState, useEffect} from "react";
import socialmedia from "../data/socialmedia"
import publicationSites from "../data/publicationSites";
import Grid from "@mui/material/Grid";
import StarsIcon from "@mui/icons-material/Stars";
import * as React from "react";

export default function () {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth < 900);
        }

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div id="profile-wrapper" style={{textAlign: 'center', padding: 3, display: 'flex', flexDirection: 'column', height: '100%'}}>
            <div style={{flex: '1 1 90%', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                {!isMobile && <h2 id="name" style={{paddingBottom: '0', marginBottom: '0'}}>Eray Tüzün</h2>}
                {isMobile && <hr/>}
                <p style={{fontSize: '0.8em',}}>Assistant Professor of Computer Engineering at Bilkent University <br/>
                    <br/>
                    Head of BILSEN Research Group</p>
                <div style={{}}>
                    <div id='outer' style={{display: 'flex', textAlign: 'center', flexDirection: isMobile ? 'row' : 'column'}}>
                        <Grid container columns={{xs: 6, sm: 6, md: 12}} style={{margin: isMobile ? '0' : '5px 0'}}>

                            {socialmedia.map((item, index) => (
                                <Grid item xs={2} sm={2} md={12} key={index}>
                                    <IconButton color="primary" style={{fontSize: '0.8em', }}>
                                        <a href={item.link} target="_blank" rel="noopener noreferrer"
                                           style={{display:'flex', textDecoration: 'none', textAlign:'center', alignItems:'center'}}>
                                            {item.icon}{item.text}
                                        </a>
                                    </IconButton>
                                </Grid>
                            ))}

                        </Grid>
                    </div>
                </div>
            </div>
            <div id="copyright" style={{textAlign: 'center', flex: '1 1 10%'}}>
                <p style={{fontSize: '0.8em', margin: 0}}>Copyright © 2024 Eray Tüzün<br/>All rights reserved</p>
            </div>
        </div>
    );
}
