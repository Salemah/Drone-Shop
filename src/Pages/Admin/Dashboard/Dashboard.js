import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link, Route, Switch } from 'react-router-dom';
import Addproducts from '../AddProduct/AddProducts';
import { Button } from '@mui/material';
import { useRouteMatch } from 'react-router-dom';
import UseAuth from '../../../Hook/UseAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageAllOrder from '../MnageAllorder/ManageAllorder';
import AddReview from '../AddReview/AddReview';
import Payment from '../Payment/Payment';
import ManageProducts from '../MangeProducts/ManageProducts';

const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { path, url } = useRouteMatch();
  const { user,admin,Logout } = UseAuth();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      {
        user?.email &&
        <Typography sx={{ color: '#EA5100' }} >
          {user.displayName}
        </Typography>
      }
      <Divider />
      <List>
        {
            !admin && 
          <Box>
            <Link style={{ textDecoration: 'none', width: '100%', color: 'black' }} to='/home'><Button sx={{ bgcolor: 'error.main', width: '100%',my:2 }} color="inherit">Home</Button></Link><br />
            <Link style={{ textDecoration: 'none', width: '100%', color: 'black'}} to={`${url}`}><Button sx={{ bgcolor: 'error.main', width: '100%' }} color="inherit">Dashboard</Button></Link>
            <Link style={{ textDecoration: 'none', width: '100%', color: 'black' }} to={`${url}/addreview`}><Button sx={{ bgcolor: 'error.main', width: '100%', my: 2 }} color="inherit">Add Review</Button> </Link>
            <Link style={{ textDecoration: 'none', width: '100%', color: 'black' }} to={`${url}/pay`}><Button sx={{ bgcolor: 'error.main', width: '100%'}} color="inherit">Pay</Button> </Link>
            <Button sx={{ bgcolor: 'error.main', width: '100%',mt:2 }}  color="inherit" onClick={Logout}>Logout</Button>
            
            
            
          </Box>
        }

        

        
       
       { admin &&
          <Box>
            <Link style={{ textDecoration: 'none', width: '100%', color: 'black' }} to='/home'><Button sx={{ bgcolor: 'error.main', width: '100%' }} color="inherit">Home</Button></Link><br />
            <Link style={{ textDecoration: 'none', width: '100%', color: 'black' }} to={`${url}/add`}><Button sx={{ bgcolor: 'error.main', width: '100%', my: 2 }} color="inherit">Add Product</Button> </Link><br />
            <Link style={{ textDecoration: 'none', width: '100%', color: 'black' }} to={`${url}/makeadmin`}><Button sx={{ bgcolor: 'error.main', width: '100%' }} color="inherit">Make Admin</Button></Link>
            <Link style={{ textDecoration: 'none', width: '100%', color: 'black' }} to={`${url}/mangeorder`}><Button sx={{ bgcolor: 'error.main', width: '100%', my: 2  }} color="inherit">Manage Order</Button></Link>
            <Link style={{ textDecoration: 'none', width: '100%', color: 'black' }} to={`${url}/mangeproducts`}><Button sx={{ bgcolor: 'error.main', width: '100%' }} color="inherit">Manage Product</Button></Link>
            <Button sx={{ bgcolor: 'error.main', width: '100%',mt:2 }}  color="inherit" onClick={Logout}>Logout</Button>
          </Box>
       }


      </List>

    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />

        <Switch>
          <Route exact path={path}>
            <DashboardHome />
          </Route>
          <AdminRoute path={`${path}/add`}>
            <Addproducts />
          </AdminRoute>
          <AdminRoute path={`${path}/makeadmin`}>
            <MakeAdmin />
          </AdminRoute>
          <AdminRoute path={`${path}/mangeorder`}>
            <ManageAllOrder />
          </AdminRoute>
          <AdminRoute path={`${path}/addreview`}>
            <AddReview />
          </AdminRoute>
          <AdminRoute path={`${path}/pay`}>
            <Payment />
          </AdminRoute>
          <AdminRoute path={`${path}/mangeproducts`}>
            <ManageProducts />
          </AdminRoute>

        </Switch>

      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;

