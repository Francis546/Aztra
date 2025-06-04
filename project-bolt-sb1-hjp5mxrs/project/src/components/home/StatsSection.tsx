import React from 'react';
import { useTranslation } from 'react-i18next';
import CountUp from 'react-countup';

const StatsSection: React.FC = () => {
  const { t } = useTranslation();
  
  const stats = [
    { label: t('home.stats.dailyVolume'), value: 2.5, suffix: 'B+', prefix: '$' },
    { label: t('home.stats.tradingPairs'), value: 175, suffix: '+' },
    { label: t('home.stats.users'), value: 1.2, suffix: 'M+' },
    { label: t('home.stats.countries'), value: 180, suffix: '+' },
  ];
  
  return (
    <div className="bg-bitfinex-darker py-12">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-4 border-b-2 border-bitfinex-blue/30 hover:border-bitfinex-blue transition-all"
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.prefix && <span>{stat.prefix}</span>}
                <CountUp
                  end={stat.value}
                  duration={2.5}
                  decimals={typeof stat.value === 'number' && stat.value % 1 !== 0 ? 1 : 0}
                />
                {stat.suffix && <span>{stat.suffix}</span>}
              </div>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;