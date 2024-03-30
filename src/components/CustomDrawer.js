import Toolbar from "@mui/material/Toolbar";

import Drawer from "@mui/material/Drawer";
import * as React from "react";
import Profile from "./Profile";
import ProfileContent from "./ProfileContent";
import Box from "@mui/material/Box";

export default function () {
    const drawerWidth = 240;

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: {width: drawerWidth, boxSizing: 'border-box'},
            }}
        >
            <Toolbar/>
            <Box sx={{width:'13em', height:'13em', m:2, borderRadius: '50%'}}>
                <Profile/>
            </Box>
            <ProfileContent/>
        </Drawer>
    )
}
