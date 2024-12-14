// components/ContactSearch/ContactSearch.jsx
import React, { useState } from 'react';
import { Box, TextField, Button, Grid ,InputAdornment} from '@mui/material';
import Typography from '@mui/material/Typography';
import searchIcone from '../../assets/search_icone.png';
import trait from '../../assets/trait-separation.svg';
import polygone from '../../assets/Polygon.svg';
import localisation from '../../assets/localisation.jpg';

const ContactSearch = () => {
  const [searchData, setSearchData] = useState({
    name: '',
    city: '',
    specialty: '',
  });

  const handleChange = (e) => {
    setSearchData({ ...searchData, [e.target.name]: e.target.value });
  };

  const handleSearch = () => {
    console.log('Searching for:', searchData);
  };

  return (
    <Box sx={{ padding: 2 ,background :"#E8E8E8",height:'26.11vw',   
          display: 'flex',flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',}}>
     <Typography
  sx={{
    fontFamily: 'Montserrat',
    fontSize: '48px',
    fontWeight: 700,
    lineHeight: '72px',
    textAlign: 'center',
    textUnderlinePosition: 'from-font',
    textDecorationSkipInk: 'none',
    color: '#191F40', // Optional color
    paddingBottom:2
  }}
>
      Contactez nos professionnels
      </Typography>

          <Box
      sx={{
        width: '73%',
        height: '25,5%',
        margin: '0 auto', // Centrer horizontalement
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 1, // Espacement entre les éléments
        borderRadius: '100px 100px 100px 100px',
        border: '1px solid #000', // Bordure noire fine
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)', // Optionnel : ajouter une ombre
        padding: '16px', // Espacement intérieur
        background:'white'
      }}
    >
      <Grid container spacing={2} >
        <Grid item xs={12} sm={4} >
        <Box
    sx={{
      borderRight: '2px solid #D9D9D9', // Bordure droite
      height: '100%', // S'assurer que la bordure couvre toute la hauteurµ
      background:'white'
    }}
  >
          <TextField
            label="Nom du professionel"
            variant="outlined"
            fullWidth
            name="name"
            value={searchData.name}
            onChange={handleChange}
            InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <img src={polygone} />
                  </InputAdornment>
                ),
              }}
            sx={{
                
                '& .MuiOutlinedInput-root': {
                  border: 'none', // Supprime la bordure par défaut
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  border: 'none', // Supprime la bordure du contour "outlined"
                },
                "& .MuiInputBase-input": {
      fontFamily: "'Montserrat', sans-serif", // Vérifiez la syntaxe de la police
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "24px",
      textAlign: "left",
    },
              }}
          />
       </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
        <Box
    sx={{
      borderRight: '2px solid #D9D9D9', // Bordure droite
      height: '100%', // S'assurer que la bordure couvre toute la hauteur
    }}
  >
          <TextField
            label="Spécialité"
            variant="outlined"
            fullWidth
            name="specialty"
            value={searchData.city}
            onChange={handleChange}
            InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <img src={polygone} />
                  </InputAdornment>
                ),
              }}
            sx={{
                '& .MuiOutlinedInput-root': {
                  border: 'none', // Supprime la bordure par défaut
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  border: 'none', // Supprime la bordure du contour "outlined"
                },
                "& .MuiInputBase-input": {
      fontFamily: "'Montserrat', sans-serif !important",
      fontSize: "16px !important",
      fontWeight: "400 !important",
      lineHeight: "24px !important",
    },
              }}
          />
          </Box>
        </Grid>
     
        <Grid item xs={12} sm={4}>
          <TextField
            label="Ville"
            variant="outlined"
            fullWidth
            name="city"
            value={searchData.specialty}
            onChange={handleChange}
            InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
              {/*       <img src={}></img> */}
                    <img src={localisation} />
                  </InputAdornment>
                ),
              }}
            sx={{
                '& .MuiOutlinedInput-root': {
                  border: 'none', // Supprime la bordure par défaut
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  border: 'none', // Supprime la bordure du contour "outlined"
                },
              }}
          />
        </Grid>
      </Grid>
    <img
    src={searchIcone}
    ></img>
    {/*     onClick={handleSearch} */}
     
    </Box>
    </Box>
  );
};

export default ContactSearch;
