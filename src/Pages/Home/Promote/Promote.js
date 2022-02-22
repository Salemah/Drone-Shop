import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import MessageIcon from '@mui/icons-material/Message';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import PaymentsIcon from '@mui/icons-material/Payments';
import { Container,  Typography } from '@mui/material';
const Promote = () => {
    return (
        <Container>
            <Box sx={{ flexGrow: 1,my:3 }}>
                <Grid container spacing={2}>
                    <Grid item xs={6} md={3} sx={{display:'flex',justifyContent:'center',alignItems:'center',textAlign:'left'}}>
                        <LocalShippingIcon sx={{color:'#EA5100 ',fontSize:35,pr:2}} />
                        <Box>
                            <Typography variant="h6" gutterBottom component="div">
                                FREE DELIVERY
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                For all orders over $120
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6} md={3}sx={{display:'flex',justifyContent:'center',alignItems:'center',textAlign:'left'}}>
                        <PaymentsIcon sx={{color:'#EA5100 ',fontSize:35,pr:2}} />
                        <Box>
                            <Typography variant="h6" gutterBottom component="div">
                                SAFE PAYMENT
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                100% secure payment
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6} md={3}sx={{display:'flex',justifyContent:'center',alignItems:'center',textAlign:'left'}}>
                        <MessageIcon sx={{color:'#EA5100 ',fontSize:35,pr:2}} />
                        <Box>
                            <Typography variant="h6" gutterBottom component="div">
                                24/7 HELP CENTER
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                Delicated 24/7 support
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6} md={3}sx={{display:'flex',justifyContent:'center',alignItems:'center',textAlign:'left'}}>
                        <PhoneInTalkIcon sx={{color:'#EA5100 ',fontSize:35,pr:2}} />
                        <Box>
                            <Typography variant="h6" gutterBottom component="div">
                                FRIENDLY SERVICES
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                30 day satisfaction guarantee
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Promote;