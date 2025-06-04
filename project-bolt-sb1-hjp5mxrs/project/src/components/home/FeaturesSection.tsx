import React from 'react';
import { useTranslation } from 'react-i18next';
import { Shield, BarChart4, Terminal, Smartphone } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const { t } = useTranslation();
  
  const features = [
    {
      icon: <Shield className="h-10 w-10" />,
      title: t('home.features.security.title'),
      description: t('home.features.security.description'),
      color: 'from-blue-600/20 to-blue-600/5',
    },
    {
      icon: <BarChart4 className="h-10 w-10" />,
      title: t('home.features.trading.title'),
      description: t('home.features.trading.description'),
      color: 'from-green-600/20 to-green-600/5',
    },
    {
      icon: <Terminal className="h-10 w-10" />,
      title: t('home.features.api.title'),
      description: t('home.features.api.description'),
      color: 'from-purple-600/20 to-purple-600/5',
    },
    {
      icon: <Smartphone className="h-10 w-10" />,
      title: t('home.features.mobile.title'),
      description: t('home.features.mobile.description'),
      color: 'from-orange-600/20 to-orange-600/5',
    },
  ];
  
  return (
    <section id="features" className="py-16 bg-bitfinex-dark">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('home.features.title')}</h2>
          <div className="w-20 h-1 bg-bitfinex-blue mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-bitfinex-gray rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px]"
            >
              <div className={`rounded-full p-4 bg-gradient-to-br ${feature.color} inline-block mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;