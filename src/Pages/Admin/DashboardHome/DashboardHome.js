import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import UseAuth from '../../../Hook/UseAuth';
import { Card, CardContent, CardMedia, CircularProgress, Container, Typography } from '@mui/material';

const DashboardHome = () => {
    const [order, setOrder] = useState([]);
    const { user, isLoading } = UseAuth();

    useEffect(() => {

        fetch(`http://localhost:5000/myorder?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setOrder(data)
            })
    }, []);
    return (
        <Container>

            <Box sx={{ flexGrow: 1, my: 3 }}>
                {!isLoading &&
                    <Grid container spacing={2}>
                        {
                           
                            order.map(order =>
                                <Grid item xs={12} sm={12} md={4} sx={{ my: 3 }}  >

                                    <Card sx={{ minWidth: 275, boxShadow: 0,border:1 }} >
                                        <CardContent sx={{ display: 'flex',textAlign:'left',py:4 }}>
                                            <Box >
                                            <CardMedia
                                                component="img"
                                                style={{ width: 'auto', height: '70px', display:'flex',textAlign:'left',borderRadius:60 }}
                                                image={order.img}
                                                alt="green iguana"
                                            />
                                            <Typography variant="h4" component="div" color="black"sx={{fontSize:'24px',fontWeight:600}}>
                                                {order.name}
                                            </Typography>
                                            <Typography variant="body2" color="black">
                                                {order.description}
                                            </Typography>
                                            <Typography variant="body2" color="red" sx={{fontWeight:'600'}}>
                                                {order.price}
                                            </Typography>
                                            <Typography variant="body2" color="red" sx={{fontWeight:'600'}}>
                                                {order.status}
                                            </Typography>

                                            </Box>

                                        </CardContent>

                                    </Card>

                                </Grid>

                            )}
                    </Grid>

                }
                {
                    isLoading && <CircularProgress></CircularProgress>
                }
            </Box>
        </Container>

    );
};

export default DashboardHome;

