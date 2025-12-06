import React from 'react';

export const IonTrapIllustration: React.FC = () => {
  return (
    <div className="my-8 flex justify-center" aria-hidden="true">
      <svg width="100%" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" className="max-w-xs sm:max-w-sm">
        <title>Illustration of a Quadrupole Ion Trap</title>
        <desc>
          A stylized 3D depiction of a Paul ion trap. Four hyperbolic electrodes and two ring-like endcap electrodes create a quadrupole electric field to trap a single ion at the center. Arrows indicate the confining forces.
        </desc>
        <defs>
          <filter id="glow-strong" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <radialGradient id="ion-glow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" style={{ stopColor: '#c084fc', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#a855f7', stopOpacity: 1 }} />
          </radialGradient>
          <linearGradient id="electrode-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#71717a" />
            <stop offset="50%" stopColor="#3f3f46" />
            <stop offset="100%" stopColor="#27272a" />
          </linearGradient>
           <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L0,6 L8,3 z" fill="#22d3ee" />
           </marker>
        </defs>

        {/* Electrodes - Back Layer */}
        <g fill="url(#electrode-grad)" stroke="#52525b" strokeWidth="0.5">
          {/* Top Electrode */}
          <path d="M 80,45 C 100,55 200,55 220,45 L 210,55 C 195,63 105,63 90,55 Z" />
          {/* Bottom Electrode */}
          <path d="M 80,155 C 100,145 200,145 220,155 L 210,145 C 195,137 105,137 90,145 Z" />
        </g>
        
        {/* Ring Endcaps */}
        <g fill="none" stroke="url(#electrode-grad)" strokeWidth="10">
          <ellipse cx="150" cy="100" rx="130" ry="30"  transform="rotate(15 150 100)" opacity="0.6"/>
          <ellipse cx="150" cy="100" rx="130" ry="30"  transform="rotate(-15 150 100)" opacity="0.6"/>
        </g>
        
        {/* Force Arrows */}
        <g stroke="#22d3ee" strokeWidth="2" filter="url(#glow-strong)" >
            {/* Vertical Arrows */}
            <line x1="150" y1="65" x2="150" y2="90" markerEnd="url(#arrowhead)" />
            <line x1="150" y1="135" x2="150" y2="110" markerEnd="url(#arrowhead)" />
            {/* Horizontal Arrows */}
            <line x1="70" y1="100" x2="140" y2="100" markerEnd="url(#arrowhead)" />
            <line x1="230" y1="100" x2="160" y2="100" markerEnd="url(#arrowhead)" />
        </g>

        {/* Trapped Ion */}
        <circle cx="150" cy="100" r="8" fill="url(#ion-glow)" filter="url(#glow-strong)" />

        {/* Electrodes - Front Layer */}
        <g fill="url(#electrode-grad)" stroke="#52525b" strokeWidth="0.5">
          {/* Top Electrode */}
          <path d="M 90,30 C 110,40 190,40 210,30 L 200,40 C 185,48 115,48 100,40 Z" />
          {/* Bottom Electrode */}
          <path d="M 90,170 C 110,160 190,160 210,170 L 200,160 C 185,152 115,152 100,160 Z" />
        </g>
      </svg>
    </div>
  );
};
