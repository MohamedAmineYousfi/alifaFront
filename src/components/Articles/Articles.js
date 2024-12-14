// components/Articles/Articles.jsx
import React from 'react';
import { Box, Grid, Card, CardContent, Button } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import dogCard from '../../assets/dogcard.png';

const Articles = () => {
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
    // Optional color
  }}
>
      Articles
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
        {[1, 2, 3].map((article) => (
          <Grid item xs={12} sm={4} key={article}>
            <Card>
            <CardActionArea>
              <CardMedia
        sx={{ height: 283 }}
        image={dogCard}
        title="green iguana"
      />
              <CardContent>
                <Typography variant="h6">Article {article}</Typography>
                <Typography variant="body2">
                  This is a brief description of the article content.
                </Typography>
                <Button variant="text" sx={{ mt: 2 }}>
                  Read More
                </Button>
              </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Articles;
