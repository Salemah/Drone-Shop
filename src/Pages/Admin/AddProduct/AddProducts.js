import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Alert, Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const appointmntBg = {

    // marginTop:150,
    backgroundColor: 'rgba(229, 223, 221 ,0.8)',
    backgroundBlendMode: 'darken, luminosity'
}


const Addproducts = () => {
    const [addSuccess, setAddSuccess] = useState(false);
    const [product, setProducts] = useState('');
    const handleOnChange = e => {
        const feild = e.target.name;
        const value = e.target.value;
        const newaptdata = { ...product };
        newaptdata[feild] = value;
        setProducts(newaptdata);
        


    }
    const handleaddservice = e => {
        const productss = {
            ...product
        }
        fetch('http://localhost:5000//addproducts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productss)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setAddSuccess(true);



                }
            });

        e.preventDefault();
    }
    return (
        <Container >
            {addSuccess && <Alert severity="success">Product successfully!</Alert>}
            <Box style={appointmntBg} sx={{ flexGrow: 1, my: 2, mx: 'auto', width: '50%', border: 1, py: 5, boxShadow: 3 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>
                        <form onSubmit={handleaddservice} >

                            <TextField
                                required
                                sx={{ width: '80%', m: 1 }}
                                id="outlined-size-small"
                                variant="standard"
                                size="small"
                                name="name"
                                placeholder='Service Name'
                                onBlur={handleOnChange}
                            />
                            <TextField
                                required
                                sx={{ width: '80%', m: 1 }}
                                id="outlined-size-small"
                                name="body"
                                variant="standard"
                                size="small"
                                placeholder='Service Description'
                                onBlur={handleOnChange}
                            />
                            <TextField
                                required
                                sx={{ width: '80%', m: 1 }}
                                id="outlined-size-small"
                                name="price"
                                size="small"
                                type="number"
                                placeholder='Service Price'
                                variant="standard"
                                onBlur={handleOnChange}
                            />
                            <TextField
                                required
                                sx={{ width: '80%', m: 1 }}
                                id="outlined-size-small"
                                name="img"
                                placeholder='img link'
                                size="small"
                                placeholder='Service Image Link'
                                variant="standard"
                                onBlur={handleOnChange}
                            />
                            <Button sx={{ width: '50%', m: 1 }} type="submit" variant="contained">Add</Button>
                        </form>
                    </Grid>

                </Grid>
            </Box>
        </Container>
    );
};

export default Addproducts;