import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import OrderModal from '../OrderModal/OrderModal';
const Allproducts = ({ drones,setOrderSuccess }) => {
    console.log(drones);

    const [orderopen, setOrderopen] = React.useState(false);
    const handleorderOpen = () => setOrderopen(true);
    const handleorderClose = () => setOrderopen(false);
    return (
        <>

            <Grid item xs={12} sm={12} md={4} >

                <Card sx={{ minWidth: 275, boxShadow: 0, ":hover": { boxShadow: 7 } }}>

                    <CardContent>
                        <CardMedia
                            component="img"
                            style={{ width: '90%', margin: '0 auto' }}
                            image={drones.img}
                           
                        />
                        <Typography variant="h6" sx={{ fontWeight: 600, }} component="div">
                            {drones.name}
                        </Typography>
                        <Typography variant="h5" sx={{ fontSize: 15, fontWeight: 500, color: '#F81FD3', }} component="div">
                            {drones.price}
                        </Typography>

                        <Typography variant="body2" sx={{ color: 'gray', my: 1 }} component="div">
                            {
                            drones.description
                            }
                        </Typography>
                        <Button variant="contained" onClick={handleorderOpen} >Buy Now</Button>
                    </CardContent>
                </Card>
            </Grid>
            




            <OrderModal

                order={drones}
                openOrderModal={orderopen}
                setOrderSuccess={setOrderSuccess}
                handleOrderClose={handleorderClose}
            ></OrderModal>
        </>
    )
};

export default Allproducts;