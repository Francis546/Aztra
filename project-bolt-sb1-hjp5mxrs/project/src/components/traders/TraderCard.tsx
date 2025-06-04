import React from 'react';
import { Trader } from '../../types';
import { TrendingUp, Users } from 'lucide-react';

interface TraderCardProps {
  trader: Trader;
}

const TraderCard: React.FC<TraderCardProps> = ({ trader }) => {
  const { name, ranking, pnl, winRate, followers, avatar } = trader;
  
  return (
    <div className="bg-bitfinex-gray rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <img 
            src={avatar} 
            alt={name} 
            className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-bitfinex-blue"
          />
          <div>
            <h3 className="font-bold text-lg">{name}</h3>
            <p className="text-sm text-gray-400">Rank #{ranking}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-bitfinex-darker p-3 rounded">
            <p className="text-sm text-gray-400 mb-1">PnL</p>
            <p className={`text-lg font-bold ${pnl >= 0 ? 'text-bitfinex-green' : 'text-bitfinex-red'}`}>
              {pnl >= 0 ? '+' : ''}{pnl.toFixed(2)}%
            </p>
          </div>
          <div className="bg-bitfinex-darker p-3 rounded">
            <p className="text-sm text-gray-400 mb-1">Win Rate</p>
            <p className="text-lg font-bold">{winRate}%</p>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center text-gray-400">
            <Users className="w-4 h-4 mr-1" />
            <span className="text-sm">{followers.toLocaleString()} followers</span>
          </div>
          <button className="btn-secondary py-1 px-3 text-sm">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
};

export default TraderCard;