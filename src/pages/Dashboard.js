// pages/Dashboard.jsx
import React from 'react';
import SliderSection from '../components/Slider/Slider';
import ContactSearch from '../components/ContactSerach/ContactSearch';
import VideoSection from '../components/VideoSection/VideoSection';
import Articles from '../components/Articles/Articles';
import AppPromotion from '../components/AppPromotion/AppPromotion';
import Events from '../components/Events/Events';

const Dashboard = () => {
  return (
    <div>
      <SliderSection />
      <ContactSearch />
      <VideoSection />
      <Articles />
      <AppPromotion />
      <Events />
    </div>
  );
};

export default Dashboard;
