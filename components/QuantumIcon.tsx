
import React from 'react';

interface QuantumIconProps {
  colorClass: string;
}

export const QuantumIcon: React.FC<QuantumIconProps> = ({ colorClass }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`w-8 h-8 ${colorClass}`}>
      <g fill="currentColor">
        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"></path>
        <circle cx="12" cy="5" r="1.5"></circle>
        <circle cx="12" cy="19" r="1.5"></circle>
      </g>
      <g fill="none" stroke="currentColor" strokeWidth="1">
        <ellipse cx="12" cy="12" rx="8" ry="3"></ellipse>
        <ellipse cx="12" cy="12" rx="3" ry="8"></ellipse>
      </g>
    </svg>
  );
};
