import React from 'react';
import { useTranslation } from 'react-i18next';
import { Search, TrendingUp, Award, Users } from 'lucide-react';
import TraderCard from '../components/traders/TraderCard';
import { Trader } from '../types';

// Sample trader data
const traders: Trader[] = [
  {
    id: '1',
    name: 'CryptoWhale',
    ranking: 1,
    pnl: 34.67,
    winRate: 78,
    followers: 15620,
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: '2',
    name: 'BitcoinQueen',
    ranking: 2,
    pnl: 27.89,
    winRate: 72,
    followers: 12450,
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: '3',
    name: 'AltcoinMaster',
    ranking: 3,
    pnl: 22.14,
    winRate: 68,
    followers: 9876,
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: '4',
    name: 'CryptoViking',
    ranking: 4,
    pnl: 19.35,
    winRate: 65,
    followers: 7543,
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: '5',
    name: 'BlockchainSage',
    ranking: 5,
    pnl: 18.76,
    winRate: 64,
    followers: 6892,
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: '6',
    name: 'SatoshiFan',
    ranking: 6,
    pnl: -3.21,
    winRate: 49,
    followers: 3456,
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

const TradersPage: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="bg-bitfinex-dark min-h-screen pt-24 pb-16">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('traders.title')}</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">{t('traders.subtitle')}</p>
          <div className="max-w-xl mx-auto relative">
            <input
              type="text"
              placeholder="Search for traders..."
              className="input-field pl-10 py-3 w-full"
            />
            <Search className="absolute left-3 top-3 text-gray-400" />
          </div>
        </div>
        
        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-bitfinex-gray/60 to-bitfinex-gray/30 p-6 rounded-lg flex items-start">
            <div className="bg-bitfinex-blue/20 p-3 rounded-full mr-4">
              <TrendingUp className="h-6 w-6 text-bitfinex-blue" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Track Performance</h3>
              <p className="text-gray-400">Follow top traders and see real-time performance metrics.</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-bitfinex-gray/60 to-bitfinex-gray/30 p-6 rounded-lg flex items-start">
            <div className="bg-bitfinex-green/20 p-3 rounded-full mr-4">
              <Award className="h-6 w-6 text-bitfinex-green" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Leaderboards</h3>
              <p className="text-gray-400">Compete with others and climb the rankings with successful trades.</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-bitfinex-gray/60 to-bitfinex-gray/30 p-6 rounded-lg flex items-start">
            <div className="bg-bitfinex-red/20 p-3 rounded-full mr-4">
              <Users className="h-6 w-6 text-bitfinex-red" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Social Trading</h3>
              <p className="text-gray-400">Connect with other traders, share strategies, and learn together.</p>
            </div>
          </div>
        </div>
        
        {/* Top Traders */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Top Traders</h2>
            <div className="flex items-center">
              <select className="bg-bitfinex-gray border border-bitfinex-light-gray rounded p-2 text-white focus:outline-none focus:ring-1 focus:ring-bitfinex-blue">
                <option value="30d">Last 30 Days</option>
                <option value="7d">Last 7 Days</option>
                <option value="24h">Last 24 Hours</option>
                <option value="all">All Time</option>
              </select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {traders.map((trader) => (
              <TraderCard key={trader.id} trader={trader} />
            ))}
          </div>
        </div>
        
        {/* CTA */}
        <div className="bg-gradient-to-r from-bitfinex-blue/20 to-bitfinex-blue/5 p-8 rounded-xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Become a Featured Trader</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            Join our traders program, share your insights, and earn rewards while building your reputation in the crypto community.
          </p>
          <button className="btn-primary px-8 py-3">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default TradersPage;