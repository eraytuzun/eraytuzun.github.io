import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import NavBar from "./NavBar";
import CustomDrawer from "./CustomDrawer";
import { useState, useEffect } from "react";
import Publication from "../pages/Publication";
import Talk from "../pages/Talk";
import Research from "../pages/Research";
import Teaching from "../pages/Teaching";
import About from "../pages/About";
import ProfileContent from "./ProfileContent";
import Contact from "../pages/Contact";
import Activity from "../pages/Activity";
import Tools from "../pages/Tools";

export default function ClippedDrawer() {
    const [selectedPage, setSelectedPage] = useState('About');
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth <= 900);
        }

        window.addEventListener('resize', handleResize);
        handleResize(); // Set initial window size

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        function handleHashChange() {
            const hash = window.location.hash.substr(1);
            if (hash && pages.includes(hash.charAt(0).toUpperCase() + hash.slice(1))) {
                setSelectedPage(hash.charAt(0).toUpperCase() + hash.slice(1));
            }
        }

        window.addEventListener('hashchange', handleHashChange);
        handleHashChange(); // Set initial selected page based on hash

        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    const pages = ['About', 'Research', 'Publications', 'Activities', 'Tools', 'Talks', 'Teaching', 'Contact'];

    const renderPage = () => {
        switch (selectedPage) {
            case 'About':
                return <About />;
            case 'Research':
                return <Research />;
            case 'Publications':
                return <Publication />;
            case 'Activities':
                return <Activity />;
            case 'Tools':
                return <Tools />;
            case 'Talks':
                return <Talk />;
            case 'Teaching':
                return <Teaching />;
            case 'Contact':
                return <Contact />;
            default:
                return <About />;
        }
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <NavBar onSelectPage={(page) => setSelectedPage(page)} />
            {!isMobile && <CustomDrawer />}
            <Box component="main" sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', p: 3, width: '100%' }}>
                <Toolbar />
                <Box sx={{ flexGrow: 1 }}>{renderPage()}</Box>
                {isMobile && <ProfileContent />}
            </Box>
        </Box>
    );
}
