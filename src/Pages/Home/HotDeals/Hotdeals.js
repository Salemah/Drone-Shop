import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import b1 from '../../../images/banner-6.jpg'
import b3 from '../../../images/banner-9.jpg'

const Hotdeals = () => {
    return (
       <Container>
            <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <Box style={{ background: `url(${b1})`,width:'100%',height:450 }}>
                        <Typography variant="h4" sx={{pt:8}}    >
                            Sale 30% Off<br/>
                            Top Computer Case Gaming
                        </Typography>
                    </Box>

                  
                </Grid>
                <Grid item xs={12} md={4}>

                </Grid>
                <Grid item xs={12} md={4}>
                <Box style={{ background: `url(${b3})`,width:'100%',height:450 }}>
                        <Typography variant="h4" sx={{pt:8}}    >
                            Sale 30% Off<br/>
                            Top Computer Case Gaming
                        </Typography>
                    </Box>

                </Grid>

            </Grid>
        </Box>
       </Container>
    );
};

export default Hotdeals;