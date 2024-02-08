import Box from "@mui/material/Box";
import * as React from "react";

export default function () {
    function onHandleClick() {
        window.location.href = "/";
    }

    return (
        <Box onClick={onHandleClick} style={{margin:'20px auto'}}>
            <img
                src="/images/profilephoto.jpg"
                alt="Profile"
                style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%'}}
            />
        </Box>
    )
}