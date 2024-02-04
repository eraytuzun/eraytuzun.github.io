import * as React from 'react';
import Box from '@mui/material/Box';

import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import NavBar from "./NavBar";
import CustomDrawer from "./CustomDrawer";
import {useState} from "react";
import Publication from "../pages/Publication";
import Talk from "../pages/Talk";
import Research from "../pages/Research";
import Teaching from "../pages/Teaching";
import Home from "../pages/Home";


export default function ClippedDrawer() {
    const [selectedPage, setSelectedPage] = useState('Home');

    const renderPage = () => {
        switch (selectedPage) {
            case 'Publications':
                return <Publication />;
            case 'Talks':
                return <Talk />;
            case 'Research':
                return <Research />;
            case 'Teaching':
                return <Teaching />;
            case 'Home':
                return <Home />;
            default:
                return null;
        }
    };

    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <NavBar onSelectPage={(page) => setSelectedPage(page)}/>
            <CustomDrawer/>
            <Box component="main" sx={{flexGrow: 1, p: 3}}>
                <Toolbar/>
                {renderPage()}
            </Box>
        </Box>
    );
}