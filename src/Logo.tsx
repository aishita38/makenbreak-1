import React from 'react';

interface LogoProps {
  size?: number;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 32, className = '' }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-blue-600"
      >
        {/* Grid pattern representing spreadsheet */}
        <rect x="2" y="2" width="28" height="28" rx="4" fill="currentColor" opacity="0.1" />
        <rect x="2" y="2" width="28" height="28" rx="4" stroke="currentColor" strokeWidth="2" />
        
        {/* Grid lines */}
        <line x1="8" y1="2" x2="8" y2="30" stroke="currentColor" strokeWidth="1" opacity="0.6" />
        <line x1="14" y1="2" x2="14" y2="30" stroke="currentColor" strokeWidth="1" opacity="0.6" />
        <line x1="20" y1="2" x2="20" y2="30" stroke="currentColor" strokeWidth="1" opacity="0.6" />
        <line x1="26" y1="2" x2="26" y2="30" stroke="currentColor" strokeWidth="1" opacity="0.6" />
        
        <line x1="2" y1="8" x2="30" y2="8" stroke="currentColor" strokeWidth="1" opacity="0.6" />
        <line x1="2" y1="14" x2="30" y2="14" stroke="currentColor" strokeWidth="1" opacity="0.6" />
        <line x1="2" y1="20" x2="30" y2="20" stroke="currentColor" strokeWidth="1" opacity="0.6" />
        <line x1="2" y1="26" x2="30" y2="26" stroke="currentColor" strokeWidth="1" opacity="0.6" />
        
        {/* Highlighted cell representing active selection */}
        <rect x="8" y="8" width="6" height="6" fill="currentColor" opacity="0.8" rx="1" />
      </svg>
      <span className="font-bold text-xl text-gray-800">Gridly</span>
    </div>
  );
};

export default Logo;
