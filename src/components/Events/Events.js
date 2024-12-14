// components/Events/Events.jsx
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import catEvent from '../../assets/catEvent.svg'
const Events = () => {
  return (
    <Box sx={{ padding: 2 ,paddingLeft:15, paddingRight:15}}>
      <Typography 
  sx={{
    fontFamily: 'Montserrat',
    fontSize: '48px',
    fontWeight: 700,
    lineHeight: '72px',
    textAlign: 'left',
    textUnderlinePosition: 'from-font',
    textDecorationSkipInk: 'none',
    color: '#343335', // Optional color
  }}
>
        Evenements
      </Typography>
      <Typography
  sx={{
    fontFamily: 'Montserrat',
    fontSize: '16px',
    fontWeight: 700,
    lineHeight: '24px',
    textAlign: 'left',
    textUnderlinePosition: 'from-font',
    textDecorationSkipInk: 'none',
    paddingBottom:2
  
    // Optional color
  }}
>
        Voir plus
      </Typography>
        <img src={catEvent} style={{
    width: "86.67vw", 
    height: "542px", 
    objectFit: "cover", // Ensures the image is properly contained
    borderRadius: "24px",
    paddingBottom:2
  }}></img>
        <Typography
          variant="h4"
          sx={{
            fontFamily: 'Montserrat',
            fontSize: '40px',
            fontWeight: 700,
            lineHeight: '60px',
            textAlign: 'left',
            textUnderlinePosition: 'from-font',
            textDecorationSkipInk: 'none',
            color: '#343335', // Optional color
          }}
        >
          Event Name
        </Typography>
        <Typography variant="h6" color="#343335">
          Date: 12th December 2024
        </Typography>
 
    </Box>
  );
};

export default Events;
