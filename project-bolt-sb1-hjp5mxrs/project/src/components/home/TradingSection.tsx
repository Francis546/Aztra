import React from 'react';
import { Link } from 'react-router-dom';
import PriceCard from '../ui/PriceCard';

const marketData = [
  { pair: 'BTC/USD', price: 63245.78, change: 2.34, volume: 1243000000 },
  { pair: 'ETH/USD', price: 3211.56, change: -1.23, volume: 678000000 },
  { pair: 'XRP/USD', price: 0.5429, change: 3.45, volume: 321000000 },
  { pair: 'SOL/USD', price: 140.67, change: 5.67, volume: 456000000 },
  { pair: 'LTC/USD', price: 83.45, change: -0.92, volume: 89000000 },
  { pair: 'DOT/USD', price: 7.23, change: 1.34, volume: 67000000 },
];

const TradingSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-bitfinex-dark to-bitfinex-darker">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Market Overview</h2>
            <p className="text-gray-400 max-w-2xl">
              Trade over 175+ cryptocurrency pairs with deep liquidity and competitive spreads.
            </p>
          </div>
          <Link to="#" className="btn-primary mt-4 lg:mt-0">
            View All Markets
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {marketData.map((market, index) => (
            <PriceCard
              key={index}
              pair={market.pair}
              price={market.price}
              change={market.change}
              volume={market.volume}
            />
          ))}
        </div>
        
        <div className="mt-16">
          <div className="bg-bitfinex-gray/30 backdrop-blur-sm p-6 md:p-8 rounded-xl">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to start trading?</h3>
                <p className="text-gray-300 max-w-xl">
                  Join millions of users trading on Bitfinex, the world's leading cryptocurrency exchange.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/signup" className="btn-primary px-8 py-3">
                  Create Account
                </Link>
                <Link to="#" className="btn-secondary px-8 py-3">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradingSection;