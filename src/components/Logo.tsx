import React from 'react';
import { Music, Disc } from 'lucide-react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = 'h-8 w-auto' }) => {
  return (
    <div className={`relative ${className}`}>
      <Disc className="text-primary-500 animate-spin-slow" />
      <Music className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white" size={16} />
    </div>
  );
};

export default Logo;