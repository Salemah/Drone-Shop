import React, { useState } from 'react';
import { Alert, Box, Button, CircularProgress, Container, Divider, Grid, TextField, Typography } from '@mui/material';
import google from '../../images/google.png'
import { NavLink } from 'react-router-dom';
import UseAuth from '../../Hook/UseAuth';
import { useHistory } from 'react-router-dom';

const Register = () => {
    const { emailpassRegister, isLoading, error } = UseAuth();
    const [regdata, setRegData] = useState({});
    const history = useHistory();
    const handleOnChange = e => {
        const feild = e.target.name;
        const value = e.target.value;
        const newData = { ...regdata };
        newData[feild] = value;
        setRegData(newData);

    }
    const handleonSubmit = e => {
        emailpassRegister(regdata.email, regdata.password, history);
        e.preventDefault();
    }


    return (
        <Container>
            <Box sx={{ flexGrow: 1, my: 7 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={12} >
                        {!isLoading &&
                            <form onSubmit={handleonSubmit}  >
                                <Box sx={{ border: 1, width: '41%', m: 'auto', py: 2 }} >
                                    <Typography sx={{ py: 3, fontWeight: 600, fontSize: 20, textAlign: 'left', pl: 6 }}> Create An Account </Typography>

                                    <TextField
                                        sx={{ width: '80%', m: 1 }}
                                        label="Last Name"
                                        name="name"
                                        type="text"
                                        onBlur={handleOnChange}
                                        variant="standard" />
                                    <TextField
                                        sx={{ width: '80%', m: 1 }}
                                        label="Email "
                                        name="email"
                                        type="email"
                                        onBlur={handleOnChange}
                                        variant="standard" />
                                    <TextField
                                        sx={{ width: '80%', m: 1 }}
                                        label="Password"
                                        name="password"
                                        type="password"
                                        onBlur={handleOnChange}
                                        variant="standard" />
                                    <TextField
                                        sx={{ width: '80%', m: 1 }}
                                        name="password2"
                                        type="password"
                                        onBlur={handleOnChange}
                                        label="Confirm Password"
                                        variant="standard" />
                                    <br />
                                    <Button
                                        type='submit'
                                        sx={{ backgroundColor: '#e0286f', color: 'white', width: '80%', m: 1 }}>Create An account</Button>
                                    <NavLink
                                        style={{ textDecoration: 'none' }}
                                        to="/login">
                                        <Button variant="text" sx={{ color: 'black' }}>Already Have An account? <span style={{ color: '#e307cd' }}> Login</span></Button>
                                    </NavLink>
                                </Box>

                            </form>
                        }

                        {
                            isLoading && <CircularProgress />
                        }
                        {error && <Alert sx={{ width: '50%', mx: 'auto', my: 1 }} severity="error">{error}</Alert>}

                        <Divider sx={{ width: '30%', m: 'auto', my: 2 }}>
                            or

                        </Divider>

                        <Button sx={{ width: '30%', m: 1, py: 1, color: 'black', borderRadius: 26 }} variant="outlined"> <img src={google} style={{ width: '8%', marginRight: '40px', marginLeft: 0 }} alt="" /> Continue With Facebook</Button><br />
                        <Button sx={{ width: '30%', py: 1, color: 'black', borderRadius: 26 }} variant="outlined"> <img src={google} style={{ width: '8%', marginRight: '40px', marginLeft: 0 }} alt="" /> Continue With google</Button>


                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Register;