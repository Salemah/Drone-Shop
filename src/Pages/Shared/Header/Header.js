import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link, NavLink } from 'react-router-dom';
import UseAuth from '../../../Hook/UseAuth';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { user, Logout } = UseAuth();
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <Link to='/home' style={{ textDecoration: 'none', color: 'white' }}>  Drone Shop</Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
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
                display: { xs: 'block', md: 'none' },
              }}

            >


              <NavLink style={{ textDecoration: 'none', color: 'black', mt: 2 }} to="/allproducts">
                <Button sx={{ width: '100%' }} color="inherit">Shop</Button>

              </NavLink><br />
              <NavLink style={{ textDecoration: 'none', color: 'black', mt: 2 }} to="/dashboard">
                <Button sx={{ width: '100%' }} color="inherit">Dashboard</Button>

              </NavLink>


            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <Link to='/home' style={{ textDecoration: 'none', color: 'white' }}>  Drone Shop</Link>
            {user?.email &&

              <Typography textAlign="center" sx={{ mt: 1, ml: 12 }}>{user.displayName}</Typography>
            }
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to='/home' style={{ textDecoration: 'none', color: 'white' }}>  Drone Shop</Link>
            </Typography>
            {/*  */}

            <NavLink style={{ textDecoration: 'none', color: 'white', mt: 2 }} to="/allproducts">
              <Button color="inherit">Shop</Button>

            </NavLink>
           
            {user?.email &&
              <Box sx={{display:'flex'}}>
                 <NavLink style={{ textDecoration: 'none', color: 'white', mt: 2 }} to="/dashboard">
              <Button color="inherit">Dashboard</Button>
            </NavLink>
                <Typography textAlign="center" sx={{ my: 1 }}>{user.displayName}</Typography>
              </Box>



            }
            {user?.email ?
              <Button onClick={Logout} color="inherit">Logout</Button> : <Link to='/login' > <Button sx={{ color: 'white', textDecoration: 'none' }}>Login</Button></Link>
            }

          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={user.photoURL} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >

              <MenuItem onClick={handleCloseUserMenu}>
                {user?.email ?
                  <Button onClick={Logout} color="inherit">Logout</Button> : <Link to='/login' > <Button sx={{ color: 'white', textDecoration: 'none' }}>Login</Button></Link>
                }
              </MenuItem>

            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;

