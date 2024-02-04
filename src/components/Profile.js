import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import * as React from "react";

export default function () {
    const commonStyles = {
        m: 1,
        width: '13rem',
        height: '13rem',
    };
    return (
        <Box sx={{overflow: 'auto', paddingTop: '20px', paddingLeft: '10px'}}>
            <Box component="div" {...commonStyles} sx={{borderRadius: '50%', overflow: 'hidden'}}>
                <img
                    src="/images/profilephoto.jpg"
                    alt="Profile"
                    style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%'}}
                />
            </Box>
        </Box>
    )
}