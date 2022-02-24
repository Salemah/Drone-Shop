import { Alert, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Allproducts from '../Allproducts/Allproducts';

const AvailabeProducts = () => {
    const [orderSuccess, setOrderSuccess] = useState(false);
    const [drone, setDrone] = useState([]);
    useEffect(() => {
        fetch('https://morning-citadel-41858.herokuapp.com/alldrone')
            .then(res => res.json())
            .then(data => setDrone(data))

    }, [])
    return (
        <Box sx={{ flexGrow: 1, mx: 5, my: 3 }}>
            {orderSuccess && <Alert severity="success">Order successfully!</Alert>}
        <Box sx={{ flexGrow: 1 }}></Box>
            <Grid container spacing={2}>
                {
                    drone.map(drones => <Allproducts
                        key={drones._id}
                        drones={drones}
                        setOrderSuccess={setOrderSuccess}>

                    </Allproducts>)
                }
            </Grid>
        </Box>
    );
};

export default AvailabeProducts;