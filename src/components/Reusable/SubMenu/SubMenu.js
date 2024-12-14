import React from 'react';
import { Box, Typography } from '@mui/material';
import patchien from '../../../assets/patchien.svg';

const SubMenu = () => {
  return (
    <Box
    sx={{

      left: '-4px',
      width: '1444px',
      height: '4.44vw',
      backgroundColor: '#FA665099',
      opacity: 0.6,
      display: 'flex',
      alignItems: 'center',
      borderRadius: '8px',
      zIndex: 1000,
      padding: '0 20px',  // Ajout de padding pour l'espacement interne
    }}
  >
    {/* Logo à gauche */}
    <Box>
      <img src={patchien} alt="Logo" style={{ width: '26px', height: '25px' ,marginLeft:'5.97vw',paddingRight:'10px'}} />
    </Box>

    {/* Texte à droite */}
    <Typography
      sx={{
        fontFamily: 'Montserrat',
        fontSize: '24px',
        fontWeight: 400,
        lineHeight: '36px',
        textAlign: 'left',
        color: '#191F40',
      }}
    >
      Le nombre d{' '}
        <span
          style={{
            fontFamily: 'Montserrat', // Typographie différente pour le mot "Alifs"
            fontSize: '24px',
            fontWeight: '500',
            lineHeight: '36px',
            color: 'black', // Exemple de couleur différente
          }}
        >
          Alifs
        </span>{' '}
        sur notre application est {' '}
        <span
          style={{
            fontFamily: 'Montserrat', // Typographie différente pour le mot "Alifs"
            fontSize: '24px',
            fontWeight: '500',
            lineHeight: '36px',
            color: 'black', // Exemple de couleur différente
          }}
        >
          608 Alifs
        </span>{' '}
      
    </Typography>
  </Box>
  );
};

export default SubMenu;
