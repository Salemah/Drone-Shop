import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import bg from '../../../images/giant_143187.jpg'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import { Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (

        <Box  sx={{ flexGrow: 1, mt: 5 ,backgroundColor:'#F4E0D9' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={3}>
                    <Typography sx={{ textAlign: 'center' }} variant="body2" sx={{ color: '#EA5100', fontSize: 24, fontWeight: 400,my:4 }} gutterBottom>Drone Shop</Typography>
                  
                </Grid>
                <Grid item xs={12} md={3}>
                    <Typography sx={{ textAlign: 'center' }} variant="body2" style={{ color: '#EA5100', fontSize: 24, fontWeight: 400 }} gutterBottom>Conatct us</Typography>
                    <Typography sx={{ textAlign: 'center' }} variant="body2" gutterBottom>Phone:012987983</Typography>
                    <Typography sx={{ textAlign: 'center' }} variant="body2" gutterBottom>email:droneshop@gmail.com</Typography>
                    
                </Grid>
                <Grid item xs={12} md={3}>
                    <Typography sx={{ textAlign: 'center' }} variant="body2" style={{ color: '#EA5100', fontSize: 24, fontWeight: 400 }} gutterBottom>Usefull Link</Typography>
                    <Typography sx={{ textAlign: 'center' }} variant="body2" gutterBottom><Link to='/allproducts' style={{textDecoration:'none'}}> SHOP </Link></Typography>
                    <Typography sx={{ textAlign: 'center' }} variant="body2" gutterBottom>NEW OFFER</Typography>
                   
                </Grid>
                <Grid item xs={12} md={3}>
                    
                    <Box sx={{ my: 8 }}>
                        <FacebookOutlinedIcon></FacebookOutlinedIcon>
                        <GoogleIcon></GoogleIcon>
                        <TwitterIcon></TwitterIcon></Box>
                    
                </Grid>
              
            </Grid>
            <Typography sx={{ textAlign: 'center',p:1}} variant="body2" gutterBottom>all right reserved takvir kader</Typography>
        </Box>

    );
};

export default Footer;