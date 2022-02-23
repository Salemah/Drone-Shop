import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import b1 from '../../../images/banner-6.jpg'
import b3 from '../../../images/banner-9.jpg'
import b2 from '../../../images/banner-8.jpg'
import { width } from '@mui/system';
const hotdealsbnr = {
    background: `url(${b1})`,

    backgroundColor: 'rgba(45,58,74,0.8)',
    height: 450,



}
const Hotdeals = () => {
    return (

        <Box sx={{ flexGrow: 1, mx: 5,my:7 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}  >
                    <Box style={hotdealsbnr} sx={{ backgroundSize: 'cover' }} >
                        <Typography variant="h4" sx={{ pt: 5, px: 2, }}    >
                            Sale 30% Off
                            Top Computer Case Gaming
                        </Typography>
                    </Box>


                </Grid>
                <Grid item xs={12} md={4}>
                    <Box sx={{ backgroundColor: '#579729', py: 4, mb: 6 }}  >
                        <Typography variant="h5" sx={{ pt: 2, px: 2 }}    >
                            Electronic Deals
                        </Typography>
                        <Typography variant="body2" sx={{ px: 2 }}    >
                            Laptop, Computer, Smartphone, Gampad
                        </Typography>
                        <Button sx={{py:2}}> Buy Now </Button>
                    </Box>

                    <Box style={{ background: `url(${b2})`,backgroundRepeat:'no-repeat',height: '250px',pt:4}} >
                        <Typography variant="h4" sx={{ py: 4, px: 2 }}    >
                            Hot Products
                            Laptop Ultra 4K 16”
                        </Typography>
                        <Typography variant="body2" sx={{py:1, px: 2 }}    >
                            Discount 20% On Products
                        </Typography>
                        

                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box style={{ background: `url(${b3})`, width: '100%', height: 450 }}>
                        <Typography variant="h4" sx={{ pt: 8,px:2 }}    >
                            Sale 30% Off
                            Top Computer Case Gaming
                        </Typography>
                    </Box>

                </Grid>

            </Grid>
        </Box>

    );
};

export default Hotdeals;