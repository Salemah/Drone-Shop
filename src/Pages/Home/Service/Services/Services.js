import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';

const Services = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/alldrone')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])
    return (
        <Box sx={{ flexGrow: 1,mx:5,my:5 }}>
            <Grid container spacing={2}>
            {
                products.map(product =>
                <Grid item xs={12} sm={12} md={4} >
                
                    <Card sx={{ minWidth: 275, boxShadow: 0, ":hover": { boxShadow: 7 } }}>
                       
                             <CardContent>
                                <CardMedia
                                    component="img"
                                    style={{ width: '90%', margin: '0 auto' }}
                                    image={product.img}
                                    alt="Paella dish"
                                />
                                <Typography variant="h6" sx={{ fontWeight: 600, }} component="div">
                                    {product.name}
                                </Typography>
                                <Typography variant="h5" sx={{ fontSize: 15, fontWeight: 500, color: '#F81FD3', }} component="div">
                                    {product.price}
                                </Typography>

                                <Typography variant="body2" sx={{ color: 'gray', my: 1 }} component="div">
                                    {product.description.slice(0,120)
                                    }
                                </Typography>
                                <Button variant="contained" >Book Service</Button>
                            </CardContent>
                            </Card>
                            </Grid>
                            )
                        }
                    
                
            </Grid>
        </Box>
    );
};

export default Services;