import Toolbar from "@mui/material/Toolbar";

import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import * as React from "react";
import Profile from "./Profile";
import ProfileContent from "./ProfileContent";

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
            <Profile/>
            <ProfileContent/>
        </Drawer>
    )
}