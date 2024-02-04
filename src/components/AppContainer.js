import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';

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
