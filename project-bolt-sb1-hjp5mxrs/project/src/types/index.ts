export interface CryptoCurrency {
  id: string;
  name: string;
  symbol: string;
  price: number;
  change24h: number;
  volume24h: number;
  marketCap: number;
  image: string;
}

export interface TradingPair {
  id: string;
  pair: string;
  lastPrice: number;
  change24h: number;
  high24h: number;
  low24h: number;
  volume24h: number;
}

export interface MarketData {
  id: string;
  pair: string;
  last: number;
  high: number;
  low: number;
  volume: number;
  change: number;
}

export interface Trader {
  id: string;
  name: string;
  ranking: number;
  pnl: number;
  winRate: number;
  followers: number;
  avatar: string;
}