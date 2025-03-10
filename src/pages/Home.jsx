import React from 'react';
import Hero from '../components/Hero';
import PartnerSlider2 from '../components/PartnerSlider2';
import Timeline from '../components/Timeline';
import Community from '../components/Community';
import CoopModel from '../components/CoopModel';
import FoodInsecurity from '../components/FoodInsecurity';
import Membership from '../components/Membership';
import CallToAction from '../components/CallToAction';
import Gallery from '../components/Gallery';
import LatestNews from '../components/LatestNews';


function Home() {
  return (
    <>
      <Hero />
      <PartnerSlider2 />
      <Timeline />
      <CoopModel />
      <Community />
      <Gallery />
      <CallToAction />
      <FoodInsecurity />
      <Membership />
      <LatestNews />
    </>
  );
}

export default Home;