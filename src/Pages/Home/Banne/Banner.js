import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import banner from '../../../images/banner.jpg'
const Banner = () => {
    return (

        <Box sx={{ flexGrow: 1, backgroundColor: '#1C1918 ', pt: 5, mb: 3 }}>
            <Grid container spacing={2} sx={{ display: 'flex', alignItems: 'center', textAlign: 'left' }}>
                <Grid item xs={12} md={6}  >
                    <Box sx={{ ml: 10 }}>
                        <Typography variant="h4" sx={{ fontWeight: 600, color: 'white' }} gutterBottom component="div">
                            BUY DJI DRONES  <br />
                            IN BANGLADESH
                        </Typography>

                        <Button variant="outlined" sx={{ color: '#EA5100', borderColor: 'white', my: 2 }}>Shop Now </Button>
                    </Box>

                </Grid>
                <Grid item xs={12} md={6} >
                    <img src={banner} style={{ width: '100%' }} alt="" />
                </Grid>

            </Grid>
        </Box>

    );
};

export default Banner;