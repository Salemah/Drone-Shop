import { Alert, Button, Container, Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import UseAuth from '../../../Hook/UseAuth';


const MakeAdmin = () => {
    const [Success, setSuccess] = useState(false);
    const [email, setEmail] = useState('');
    const {token} =  UseAuth();
    const handleOnChange = e => {
        setEmail(e.target.value);


    }
    const handleadmin = e => {
        const user = {email}
        fetch('https://morning-citadel-41858.herokuapp.com/users/makeadmin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            }, body:JSON.stringify(user)

        }).then(res => res.json())
        .then(data => {
            if (data.modifiedCount) {
                setEmail('');
                setSuccess(true);
            }
        })
        e.preventDefault();
    }
    return (
        <Container >
            {Success && <Alert severity="success">Service Booked successfully!</Alert>}
            <Box sx={{ flexGrow: 1, my: 2, mx: 'auto', width: '50%', border: 1, py: 5, boxShadow: 3 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>
                        <form onSubmit={handleadmin} >

                            <TextField
                                required
                                sx={{ width: '80%', m: 1 }}
                                id="outlined-size-small"
                                variant="standard"
                                size="small"
                                name="email"
                                placeholder='Enter Email'
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

export default MakeAdmin;

