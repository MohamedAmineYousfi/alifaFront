// components/VideoSection/VideoSection.jsx
import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import chienvideo1 from '../../assets/chienvideo1.png'
import video2 from '../../assets/video2.png'

const VideoSection = () => {
  return (
    <Box sx={{ paddingLeft:15  }}>
      <Typography
  sx={{
    fontFamily: 'Montserrat',
    fontSize: '48px',
    fontWeight: 700,
    lineHeight: '72px',
    textAlign: 'left',
    textUnderlinePosition: 'from-font',
    textDecorationSkipInk: 'none',
    // Optional color
  }}
>
        Featured Videos
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
  }}
>
        Voir plus
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Box
            sx={{
              width: '100%',
              height: 542,
              backgroundColor: 'black',
              backgroundPosition: 'center',
              backgroundImage: `url(${chienvideo1})`,
              backgroundSize: 'cover',
              borderRadius: 5
            }}
          ></Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              width: '100%',
              height: 280,
              backgroundSize: 'cover',
            }}
          >
            <img src={video2}></img>
            <h2>nom video 2</h2>
            <Typography
  sx={{
    fontFamily: 'Montserrat',
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '24px',
    textAlign: 'left',
    textUnderlinePosition: 'from-font',
    textDecorationSkipInk: 'none',
     color: '#343335'
  }}
>
subtitle
</Typography>
          </Box>
          <Box
            sx={{
              width: '100%',
              height: 200,
              backgroundSize: 'cover',
            }}
          >
            <img src={video2}></img>
            <h2>nom video 2</h2>
            <Typography
  sx={{
    fontFamily: 'Montserrat',
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '24px',
    textAlign: 'left',
    textUnderlinePosition: 'from-font',
    textDecorationSkipInk: 'none',
     color: '#343335'
  }}
>
subtitle
</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default VideoSection;
