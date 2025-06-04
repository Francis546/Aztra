import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface PriceCardProps {
  pair: string;
  price: number;
  change: number;
  volume?: number;
}

const PriceCard: React.FC<PriceCardProps> = ({ pair, price, change, volume }) => {
  const isPositive = change >= 0;
  
  return (
    <div className="bg-bitfinex-gray p-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:bg-bitfinex-gray/90 cursor-pointer">
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-semibold text-lg">{pair}</h3>
        <div className={`flex items-center ${isPositive ? 'text-bitfinex-green' : 'text-bitfinex-red'}`}>
          {isPositive ? (
            <TrendingUp className="w-4 h-4 mr-1" />
          ) : (
            <TrendingDown className="w-4 h-4 mr-1" />
          )}
          <span className="font-medium">{isPositive ? '+' : ''}{change.toFixed(2)}%</span>
        </div>
      </div>
      <div className="text-2xl font-bold mb-2">${price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
      {volume !== undefined && (
        <div className="text-sm text-gray-400">
          Vol: ${volume.toLocaleString('en-US', { notation: 'compact', compactDisplay: 'short' })}
        </div>
      )}
    </div>
  );
};

export default PriceCard;