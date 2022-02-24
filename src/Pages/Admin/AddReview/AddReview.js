import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Alert, Button, Container, TextField } from '@mui/material';

const AddReview = () => {
    const [review,setReview] = useState({});
    const [reviewSuccess, setReviewSuccess] = useState(false);
    const handleOnChange = e =>{
        const feild = e.target.name;
        const value = e.target.value;
        const newReview = {...review};
        newReview[feild] = value;
        setReview(newReview);
        console.log(review);
    }
    const handleOnSubmit = e =>{
        const reviewdata ={...review}
        fetch('http://localhost:5000/review',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(reviewdata)
        })
        .then(res=>res.json())
        .then(data =>{
            if(data.insertedId){
                setReviewSuccess(true);
            }
        })
        e.preventDefault();
    }

    return (
        <Container>
            <Box sx={{ flexGrow: 1, my: 2, mx: 'auto', width: '50%', border: 1, py: 5, boxShadow: 3 }}>
            {reviewSuccess && <Alert sx={{my:2}} severity="success">Review successfully!</Alert>}
                <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>
                        <form onSubmit={handleOnSubmit}>
                            <TextField
                                required
                                sx={{ width: '80%', m: 1 }}

                                label="Name"
                                variant="outlined"
                                size="small"
                                name="name"
                                placeholder='Your Name'
                             onBlur={handleOnChange}
                            />
                        
                            <TextField
                                required
                                sx={{ width: '80%', m: 1 }}
                                id="outlined-size-small"
                                name="description"
                                size="small"
                                type="text"
                                placeholder='Description'
                                label="Description"
                                variant="outlined"
                            onBlur={handleOnChange}
                            />

                            <Button sx={{ width: '80%', m: 1 }} type="submit" variant="contained">Add</Button>
                        </form>
                    </Grid>

                </Grid>
            </Box>
        </Container>
    );
};

export default AddReview;
