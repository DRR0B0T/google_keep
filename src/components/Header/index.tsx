import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import RefreshIcon from '@mui/icons-material/Refresh';
import GridViewIcon from '@mui/icons-material/GridView';
import MoreIcon from '@mui/icons-material/MoreVert';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import {SearchBox} from "../SearchBox";
import {createTheme, Link, ThemeProvider} from "@mui/material";


const theme = createTheme({
  palette: {
    primary: {main: '#fff', },
    secondary: {main: '#909397',}
  },
});
export  function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
      React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
      <Menu
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          id={menuId}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={isMenuOpen}
          onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
      <Menu
          anchorEl={mobileMoreAnchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          id={mobileMenuId}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={isMobileMenuOpen}
          onClose={handleMobileMenuClose}
      >
        <MenuItem>
          <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <RefreshIcon />
          </IconButton>
          <p>Messages</p>
        </MenuItem>
        <MenuItem>
          <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
          >
              <GridViewIcon />
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={handleProfileMenuOpen}>
          <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>
  );

  return (
      <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }} >
        <AppBar color='primary' >
          <Toolbar>
            <IconButton
                size="large"
                edge="start"
                color="secondary"
                aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>

              <Link
                  href="#"
                  color="#5F658A"
                  underline="none"
                  fontSize={22}
                  variant={'h2'}
                  sx={{
                    display: 'flex',
                    alignItems: 'center'
                  }}
              ><img
                  style={{
                    width: 40,
                    height: 40
                  }}
                  src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" alt="icon"/>
                <span
                style={{
                  color: '#5f6368',
                  fontSize: 22,
                  fontWeight: 400,
                  marginLeft: 5
                }}
                >Keep</span>
              </Link>
           <SearchBox/>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <IconButton size="large" aria-label="show 4 new mails" color="secondary">
                  <RefreshIcon />
              </IconButton>
              <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="secondary"
              >
                  <GridViewIcon />
              </IconButton>
              <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="secondary"
              >
                  <SettingsOutlinedIcon/>
              </IconButton>
              <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="secondary"
              >
                  <AppsRoundedIcon/>
              </IconButton>
              <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="secondary"
              >
                <AccountCircle />
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                  size="large"
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>
      </ThemeProvider>
  );
}


