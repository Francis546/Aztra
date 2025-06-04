import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, TrendingUp } from 'lucide-react';

const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="relative bg-gradient-to-b from-bitfinex-darker to-bitfinex-dark pt-32 pb-20 overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-bitfinex-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute top-40 -left-20 w-80 h-80 bg-bitfinex-blue/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Hero Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {t('home.hero.title')}
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              {t('home.hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link to="/signup" className="btn-primary text-lg px-8 py-3 flex items-center justify-center w-full sm:w-auto">
                {t('home.hero.tradeBtnText')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="#features" className="btn-secondary text-lg px-8 py-3 flex items-center justify-center w-full sm:w-auto">
                {t('home.hero.exploreBtnText')}
              </Link>
            </div>
          </div>
          
          {/* Hero Image/Chart */}
          <div className="w-full lg:w-1/2 animate-slide-up">
            <div className="bg-bitfinex-gray/30 backdrop-blur-sm p-6 rounded-xl shadow-2xl border border-bitfinex-gray">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="font-bold text-lg">BTC/USD</h3>
                  <div className="flex items-center text-bitfinex-green">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    <span>+2.34%</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold">$63,245.78</p>
                  <p className="text-gray-400">$63,124.50</p>
                </div>
              </div>
              
              {/* Chart Placeholder */}
              <div className="h-64 relative overflow-hidden rounded-lg">
                <img 
                  src="https://images.pexels.com/photos/6771607/pexels-photo-6771607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Trading chart" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-bitfinex-darker/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;