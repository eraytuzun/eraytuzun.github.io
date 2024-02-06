import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import { useState, useEffect } from "react";
import socialmedia from "../data/socialmedia"

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
        <div id="profile-wrapper" style={{ textAlign: 'center', padding: 3, display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div style={{ flex: '1 1 90%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                {!isMobile && <h2 id="name">Eray Tüzün</h2>}
                {isMobile && <hr />}
                <p style={{ fontSize: '0.8em' }}>Assistant Professor of Computer Engineering at Bilkent University, Head
                    of BILSEN Research Group</p>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ display: 'flex', textAlign: 'left', flexDirection: isMobile ? 'row' : 'column' }}>
                        {socialmedia.map((item, index) => (
                            <Link key={index} href={item.link} target="_blank" rel="noopener noreferrer"
                                  style={{ textDecoration: 'none' }}>
                                <IconButton color="primary" style={{ fontSize: '0.8em', margin: 0, padding: 4 }}>
                                    {item.icon}{item.text}
                                </IconButton>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <div id="copyright" style={{ textAlign: 'center', flex: '1 1 10%' }}>
                <p style={{ fontSize: '0.8em', margin: 0 }}>Copyright © 2024 Eray Tüzün<br />All rights reserved</p>
            </div>
        </div>
    );
}
