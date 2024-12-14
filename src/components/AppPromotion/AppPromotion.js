// components/AppPromotion/AppPromotion.jsx
import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import Isolated_left_hand_holding_smartphone from "../../assets/Isolated_left_hand_holding_smartphone.svg"
import ios_store from "../../assets/ios-store.svg"
import chathand from '../../assets/chathand.svg'


const AppPromotion = () => {
  return (
    <Box 
    sx={{ padding: 2, backgroundColor: '#FF7043' , position: 'relative'}}
    >

      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={6} sx={{ position: 'relative' }}>

 {/*        <img
    src={chathand}  // Your background image URL
    alt="Background"
    style={{
      position: 'absolute',
      top: 0,
      width: '70vw',  // 70% of viewport width
      height: '50vh',
      objectFit: 'cover', // This will make sure the background image covers the area
      zIndex: -2, // Ensures the background image stays behind the other image
    }}
  /> */}
           <img src={Isolated_left_hand_holding_smartphone} alt="Phone"
           style={{ width: '100%' 
            ,   position: 'relative', 
               zIndex: 1, }} /> 
        </Grid>
        <Grid item xs={12} md={6}>
        <Typography
  sx={{
    fontFamily: 'Montserrat',
    fontSize: '48px',
    fontWeight: 700,
    lineHeight: '72px',
    textAlign: 'left',
    textUnderlinePosition: 'from-font',
    textDecorationSkipInk: 'none',
    color: 'white'// Optional color
  }}
>
        Télécharger 
      
          </Typography>
          <Typography
  sx={{
    fontFamily: 'Montserrat',
    fontSize: '48px',
    fontWeight: 700,
    lineHeight: '72px',
    textAlign: 'left',
    textUnderlinePosition: 'from-font',
    textDecorationSkipInk: 'none',
    color: 'white'// Optional color
  }}
>
      
        l'application
          </Typography>
          <Typography  color="white"
          sx={{
            fontFamily: 'Montserrat',
            fontSize: '24px',
            fontWeight: 400,
            lineHeight: '29px',
            textAlign: 'left',
            textUnderlinePosition: 'from-font',
            textDecorationSkipInk: 'none',
            color: 'white'// Optional color
          }}
          >
            Get the app from the App Store or Google Play
          </Typography>
          <img src={ios_store} alt="Phone" style={{ marginTop:25 }} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppPromotion;
