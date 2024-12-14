// components/Footer/Footer.jsx
import React from 'react';
import { Box, Typography, IconButton, Container } from '@mui/material';
import { Facebook, Instagram, YouTube } from '@mui/icons-material';
import Logo from '../../../assets/logoBlanc.svg';
const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#191F40', color: 'white', padding: '20px 0' ,height: '21.11vw',display: 'flex', alignItems: 'center'}}>
      <Container sx={{ display: 'flex',alignContent:'center',  justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Logo on the left */}
        <Box sx={{ display: 'flex',alignContent:'center', justifyContent: 'center', alignItems: 'center' }}>
          <img src={Logo} alt="Logo" style={{ height: '40px' }} />
        </Box>

        {/* "Suivez-nous" section with social media icons */}
        <Box sx={{ textAlign: 'left' }}>
          <Typography variant="body2" sx={{ marginBottom: '10px' ,fontWeight:600,fontFamily:'Roboto'}}>
            Suivez-nous
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: '10px' ,fontWeight:400,fontFamily:'Roboto'}}>
          On partage avec vous 
          </Typography>
          <Box>
            <IconButton
              href="https://facebook.com"
              target="_blank"
              sx={{ color: 'white', marginRight: '10px' }}
            >
              <Facebook />
            </IconButton>
            <IconButton
              href="https://instagram.com"
              target="_blank"
              sx={{ color: 'white', marginRight: '10px' }}
            >
              <Instagram />
            </IconButton>
            <IconButton
              href="https://youtube.com"
              target="_blank"
              sx={{ color: 'white' }}
            >
              <YouTube />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
