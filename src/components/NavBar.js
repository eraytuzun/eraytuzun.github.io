import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Profile from "./Profile";


const pages = ['About','Publications', 'Talks', 'Research', 'Teaching', 'Contact'];

const NavBar = ({onSelectPage}) => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handlePageClick = (page) => {
        onSelectPage(page);
        handleCloseNavMenu();
    };


    return (
        <React.Fragment>
            <AppBar position="fixed" sx={{zIndex: (theme) => theme.zIndex.drawer + 1}} style={{background: '#3a3333'}}>
                <Container maxWidth="xl">
                    <Toolbar id="back-to-top-anchor" disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            sx={{
                                mr: 15,
                                display: {xs: 'none', md: 'flex'},
                                fontFamily: 'DM Sans',
                                fontWeight: 800,
                                letterSpacing: '.1rem',
                                color: 'inherit',
                                textDecoration: 'none',
                                "&:hover": {color: "#dcdbd9", textDecoration: "none", fontWeight: 900},
                                userSelect: 'none',
                                cursor:"default"
                            }}
                        >
                            Eray Tüzün
                        </Typography>

                        <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon/>
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: {xs: 'block', md: 'none'},
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={() => handlePageClick(page)}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: {xs: 'flex', md: 'none'},
                                flexGrow: 1,
                                fontFamily: 'DM Sans',
                                fontWeight: 800,
                                letterSpacing: '.1rem',
                                color: 'inherit',
                                textDecoration: 'none',
                                "&:hover": {color: "#dcdbd9", textDecoration: "none", fontWeight: 900}
                            }}
                        >
                            Eray Tüzün
                        </Typography>
                        <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={() => handlePageClick(page)}
                                    sx={{my: 2, color: 'white', display: 'block'}}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>
                        <Box sx={{display: { xs: 'flex', md: 'none', }, width:'3em', height:'3em', alignItems:'center', borderRadius:'50%', mt:1, mr:1}}>
                            <Profile/>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </React.Fragment>

    )
        ;
}

export default NavBar;