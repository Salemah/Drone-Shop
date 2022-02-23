import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Alert, Button, LinearProgress, TextField, Typography } from '@mui/material';
import google from '../../../images/google.png'
import { NavLink } from 'react-router-dom';
import UseFirebase from '../../../Hook/UseFirebase';
const Login = () => {
   const{ GoogleSignin } = UseFirebase();
    return (
        <Container>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    
                        <Box>
                            {/* <img src={} style={{ width: 100, marginTop: 46, marginBottom: '30px' }} alt="" /> */}
                            <Typography sx={{ py: 3, fontWeight: 600, fontSize: 20 }}> Login With</Typography>
                            {/* // */}
                            <form >
                                <TextField
                                    sx={{ width: '50%', m: 1 }}
                                    id="filled-number"
                                    label="Email"
                                    type="text"
                                    name="email"
                                    //onChange={handleOnChange}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="standard"
                                />
                                <TextField
                                    sx={{ width: '50%', m: 1 }}
                                    id="filled-number"
                                    label="Password"
                                    type="password"
                                    name="password"
                                   // onChange={handleOnChange}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="standard"
                                />
                                <Button sx={{ width: '50%', m: 1 }} type="submit" variant="contained">Login</Button>
                            </form>
                            {/* {user?.email && <Alert sx={{ width: '50%',mx:'auto', my: 1  }} severity="success">Login Succesfull</Alert>}
                            {error && <Alert sx={{ width: '50%',mx:'auto', my: 1 }} severity="error">{error}</Alert>}
                             */}


                            <Button  onClick={GoogleSignin}  sx={{ py: 1, color: 'black', borderRadius: 26 }} variant="outlined"> <img src={google} style={{ width: '8%', marginRight: '40px', marginLeft: 0 }} alt="" /> Continue With google</Button> <br />
                            <NavLink

                                style={{ textDecoration: 'none', }}
                                to="/register"><Button variant="text" style={{ color: '#080808' }} sx={{ py: 2 }}>Don't Have an  account ? <span style={{ color: '#e307cd' }}>Create an Account</span></Button>
                            </NavLink>
                        </Box>
                    
                </Grid>
            </Grid>
        </Box>
    </Container>
    );
};

export default Login;