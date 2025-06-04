import React from 'react';

interface BitfinexLogoProps {
  className?: string;
}

const BitfinexLogo: React.FC<BitfinexLogoProps> = ({ className = 'w-8 h-8' }) => {
  return (
    <div className={`text-bitfinex-blue ${className}`}>
      <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" fill="currentColor"/>
        <path d="M16 6V26M6 16H26" stroke="white" strokeWidth="4" strokeLinecap="round"/>
      </svg>
    </div>
  );
};

export default BitfinexLogo;