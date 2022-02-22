import React from 'react';
import { Container, Grid, Typography} from '@mui/material';
import Slider from "react-slick";
import a from '../../../images/Ellipse 91.png';
import { Box } from '@mui/system';
const reviewi = [{
    img:a,
    name:"winson harry",
    body:" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi tempora et id, laudantium illum autem reprehenderit possimus placeat ipsum sint facilis",
    state:" Newyork"
  
  
  },{
    img:a,
    name:" harry",
    body:" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi tempora et id, laudantium illum autem reprehenderit possimus placeat ipsum sint facilis",
    state:" Newyork"
  
  
  },{
    img:a,
    name:"winson3",
    body:" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi tempora et id, laudantium illum autem reprehenderit possimus placeat ipsum sint facilis",
    state:" Newyork"
  
  
  },{
    img:a,
    name:"winso",
    body:" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi tempora et id, laudantium illum autem reprehenderit possimus placeat ipsum sint facilis",
    state:" Newyork"
  
  
  },{
    img:a,
    name:"wharry",
    body:" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi tempora et id, laudantium illum autem reprehenderit possimus placeat ipsum sint facilis",
    state:" Newyork"
  
  
  }]

const Review = () => {
    const  settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };

    return (
        <Container sx={{my:7}} data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500">
        <Typography variant="h4" gutterBottom component="div">
        Review
      </Typography>
       <Slider {...settings}> 
            {reviewi.map(review => <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12} sx={{ px: 3, textAlign: 'left' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', my: 1 }}>
                        <img style={{ width: 100, height: "100px", borderRadius: '40px' }}
                            src={review.img} alt="" />
                        <Typography variant="h4" gutterBottom component="div">
                            {review.name}
                        </Typography>


                    </Box>
                    <Typography variant="body1" gutterBottom>
                        {review.body}
                    </Typography>
                </Grid>

            </Grid>
        </Box>)}
        </Slider> 
    </Container>
    );
};

export default Review;