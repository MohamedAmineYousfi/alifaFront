// components/Slider/Slider.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import bannerImage from '../../assets/temp-banner.png';
import 'swiper/css'; 
import photochien from '../../assets/photochien.svg'
const SliderSection = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 2500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
        const images = [
          'https://via.placeholder.com/800x400?text=Image+1',
          'https://via.placeholder.com/800x400?text=Image+2',
          'https://via.placeholder.com/800x400?text=Image+3',
          'https://via.placeholder.com/800x400?text=Image+4',
        ];
  return (
    <Box>
       <Swiper
      spaceBetween={10} // Adjust the space between images
      slidesPerView={1} // Number of slides visible at the same time
      loop={true} // Makes the carousel loop
      autoplay={{
        delay: 3000, // Auto-slide interval (in ms)
        disableOnInteraction: false, // Keeps autoplay after interaction
      }}
      pagination={{
        clickable: true, // Allows click on pagination bullets
      }}
      navigation={true} // Enables next/prev navigation arrows
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            src={photochien}
            alt={`Image ${index + 1}`}
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover',
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
    </Box>
  );
};

export default SliderSection;
