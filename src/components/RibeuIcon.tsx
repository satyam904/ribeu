import React from 'react';

interface RibeuIconProps {
  className?: string;
  size?: number;
}

const RibeuIcon: React.FC<RibeuIconProps> = ({ className = "w-8 h-8", size = 32 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background Circle with Gradient */}
      <defs>
        <linearGradient id="ribeuGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="50%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
        <linearGradient id="ribeuAccent" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.7" />
        </linearGradient>
      </defs>
      
      {/* Main Background */}
      <rect
        width="32"
        height="32"
        rx="8"
        fill="url(#ribeuGradient)"
      />
      
      {/* Letter "R" - Modern Geometric Design */}
      <g fill="url(#ribeuAccent)">
        {/* Vertical line of R */}
        <rect x="8" y="8" width="2.5" height="16" rx="1.25" />
        
        {/* Top horizontal line of R */}
        <rect x="8" y="8" width="10" height="2.5" rx="1.25" />
        
        {/* Middle horizontal line of R */}
        <rect x="8" y="14.75" width="8" height="2.5" rx="1.25" />
        
        {/* Top right vertical line */}
        <rect x="15.5" y="8" width="2.5" height="6.75" rx="1.25" />
        
        {/* Bottom diagonal line */}
        <rect 
          x="14" 
          y="17.5" 
          width="6" 
          height="2.5" 
          rx="1.25" 
          transform="rotate(35 17 18.75)"
        />
      </g>
      
      {/* Accent Dots for Modern Touch */}
      <circle cx="22" cy="10" r="1.5" fill="url(#ribeuAccent)" opacity="0.8" />
      <circle cx="24" cy="22" r="1" fill="url(#ribeuAccent)" opacity="0.6" />
      
      {/* Subtle Inner Shadow Effect */}
      <rect
        width="32"
        height="32"
        rx="8"
        fill="none"
        stroke="rgba(255,255,255,0.2)"
        strokeWidth="0.5"
      />
    </svg>
  );
};

export default RibeuIcon;