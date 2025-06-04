import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { MarketData } from '../../types';

const sampleMarketData: MarketData[] = [
  { id: '1', pair: 'BTC/USD', last: 63245.78, high: 63500.00, low: 62100.00, volume: 1243000000, change: 2.34 },
  { id: '2', pair: 'ETH/USD', last: 3211.56, high: 3300.00, low: 3150.00, volume: 678000000, change: -1.23 },
  { id: '3', pair: 'XRP/USD', last: 0.5429, high: 0.56, low: 0.52, volume: 321000000, change: 3.45 },
  { id: '4', pair: 'SOL/USD', last: 140.67, high: 145.00, low: 136.00, volume: 456000000, change: 5.67 },
  { id: '5', pair: 'DOT/USD', last: 7.23, high: 7.45, low: 7.10, volume: 67000000, change: 1.34 },
  { id: '6', pair: 'DOGE/USD', last: 0.1324, high: 0.14, low: 0.13, volume: 89000000, change: 4.56 },
  { id: '7', pair: 'LTC/USD', last: 83.45, high: 85.00, low: 82.00, volume: 45000000, change: -0.92 },
  { id: '8', pair: 'LINK/USD', last: 15.67, high: 16.00, low: 15.20, volume: 34000000, change: 2.78 },
];

const MarketTicker: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(sampleMarketData.length / itemsPerPage);
  
  // Auto scroll effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [totalPages]);
  
  const visibleMarkets = sampleMarketData.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );
  
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
  };
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };
  
  return (
    <div className="bg-bitfinex-darker py-3">
      <div className="container-custom">
        <div className="flex items-center">
          <button
            onClick={handlePrev}
            className="p-1 text-gray-400 hover:text-white"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <div className="flex-grow overflow-hidden">
            <div className="grid grid-cols-4 gap-4">
              {visibleMarkets.map((market) => (
                <div key={market.id} className="text-center">
                  <p className="text-sm font-medium">{market.pair}</p>
                  <p className={`text-base font-bold ${market.change >= 0 ? 'text-bitfinex-green' : 'text-bitfinex-red'}`}>
                    ${market.last < 1 ? market.last.toFixed(4) : market.last.toFixed(2)}
                    <span className="ml-2 text-xs">
                      {market.change >= 0 ? '+' : ''}{market.change.toFixed(2)}%
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <button
            onClick={handleNext}
            className="p-1 text-gray-400 hover:text-white"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MarketTicker;