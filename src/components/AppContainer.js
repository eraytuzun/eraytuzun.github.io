import * as React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fade from '@mui/material/Fade';

import '../App.css'
import ClippedDrawer from "./ClippedDrawer";



export default function AppContainer(props) {
    return (
        <React.Fragment>
            <CssBaseline/>
            <div>
                <ClippedDrawer/>
            </div>
        </React.Fragment>
    );
}
