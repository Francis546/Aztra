import React from 'react';
import HeroSection from '../components/home/HeroSection';
import StatsSection from '../components/home/StatsSection';
import FeaturesSection from '../components/home/FeaturesSection';
import TradingSection from '../components/home/TradingSection';

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <TradingSection />
    </div>
  );
};

export default HomePage;