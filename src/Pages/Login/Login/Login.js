import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Alert, Button, LinearProgress, TextField, Typography } from '@mui/material';
import google from '../../../images/google.png'
import { NavLink } from 'react-router-dom';
import UseAuth from '../../../Hook/UseAuth';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';


const Login = () => {
   const{ GoogleSignin,passwordSign, isLoading, user, error } = UseAuth();
   const [loginData, setLoginData] = React.useState({});
   const location = useLocation();
    const history = useHistory();

   const handleOnChange = e => {
    const feild = e.target.name;
    const value = e.target.value;
    const newlogindata = { ...loginData };
    newlogindata[feild] = value;
    setLoginData(newlogindata);
    console.log(newlogindata);


};
const handleLoginSubmit = e => {
    passwordSign(loginData.email, loginData.password ,location, history);
    e.preventDefault();
};
const handleGoogleSignIn = () => {
    GoogleSignin(location, history)
    console.log(location);
}


    return (
        <Container>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                {!isLoading &&
                        <Box>
                            {/* <img src={} style={{ width: 100, marginTop: 46, marginBottom: '30px' }} alt="" /> */}
                            <Typography sx={{ py: 3, fontWeight: 600, fontSize: 20 }}> Login With</Typography>
                            {/* // */}
                            <form onSubmit={handleLoginSubmit} >
                                <TextField
                                    sx={{ width: '50%', m: 1 }}
                                    id="filled-number"
                                    label="Email"
                                    type="text"
                                    name="email"
                                   
                                    onChange={handleOnChange}
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
                               
                                     onChange={handleOnChange}
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


                            <Button  onClick={handleGoogleSignIn}  sx={{ py: 1, color: 'black', borderRadius: 26 }} variant="outlined"> <img src={google} style={{ width: '8%', marginRight: '40px', marginLeft: 0 }} alt="" /> Continue With google</Button> <br />
                            <NavLink

                                style={{ textDecoration: 'none', }}
                                to="/register"><Button variant="text" style={{ color: '#080808' }} sx={{ py: 2 }}>Don't Have an  account ? <span style={{ color: '#e307cd' }}>Create an Account</span></Button>
                            </NavLink>
                        </Box>
}{
                            isLoading && <LinearProgress />
                        }
                </Grid>
            </Grid>
        </Box>
    </Container>
    );
};

export default Login;