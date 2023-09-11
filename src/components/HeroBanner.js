import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import HeroBannerImage from '../assets/images/Gymphoto.jpg'

function HeroBanner() {
    return (
        <Box
            sx={{
                mt: { lg: "212px", xs: "70px" },
                ml: { sm: "50px" }
            }}
            position="relative"
            p="20px" >

            <Typography color="#FF2625" fontWeight="600" fontSize="40px" mt="-80px">
                Fitness Club
            </Typography>

            <Typography fontWeight="1000"
                sx={{ fontSize: { lg: "50px", xs: "28px" } }} mb="23px">
                WORK <br /> SWEAT <br /> REPEAT
            </Typography>

            <Typography fontSize="18px" mb={2} mt="10px">
                Check out the most effective exercises
            </Typography>

            <Button variant='contained' color='error' href='#exercises'>Explore Exercises</Button>

            <Typography
                fontWeight={700}
                color="#FF2625"
                fontSize="200px"
                mt="-70px"
                ml="-80px"
                sx={{
                    display: { lg: 'block', xs: 'none' },
                    opacity: 0.1
                }}>
                Exercise
            </Typography>

            <img src={HeroBannerImage} alt="banner" className='hero-banner-img' mr="0px" />
        </Box>
    )
}

export default HeroBanner