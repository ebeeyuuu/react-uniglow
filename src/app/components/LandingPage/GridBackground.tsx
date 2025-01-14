'use client';

import React, { useState, useEffect } from 'react';

interface GridBackgroundProps {
  className?: string;
  lineColor?: string;
  gridColor?: string;
  vignetteIntensity?: number;
  gridSize?: number;
}

const GridBackground: React.FC<GridBackgroundProps> = ({
  className = '',
  lineColor = 'rgba(99, 102, 241, 0.8)',
  gridColor = 'rgba(255, 255, 255, 0.25)',
  vignetteIntensity = 0.8,
  gridSize = 32,
}) => {
  const [path, setPath] = useState('');
  const [pathLength, setPathLength] = useState(0);

  useEffect(() => {
    const generatePath = () => {
      const steps = Math.ceil(window.innerWidth / gridSize) * 1.5;
      const pathPoints: string[] = [];
      let x = -gridSize * 2;
      let y = window.innerHeight / 2;

      for (let i = 0; i < steps; i++) {
        const direction = Math.random() > 0.5 ? 1 : -1;
        const newX = x + gridSize;
        const newY = y + (direction * gridSize);
        pathPoints.push(`L${newX},${newY}`);
        x = newX;
        y = newY;
      }

      return `M${-gridSize * 2},${window.innerHeight / 2} ${pathPoints.join(' ')}`;
    };

    const newPath = generatePath();
    setPath(newPath);

    const pathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathElement.setAttribute('d', newPath);
    setPathLength(pathElement.getTotalLength());
  }, [gridSize]);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, ${vignetteIntensity}) 100%)`
        }}
      />
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="grid" width={gridSize} height={gridSize} patternUnits="userSpaceOnUse">
            <path d={`M0 ${gridSize} L${gridSize} 0 Z`} strokeWidth="1" stroke={gridColor} fill="transparent" />
            <path d={`M${gridSize} ${gridSize} L0 0 Z`} strokeWidth="1" stroke={gridColor} fill="transparent" />
          </pattern>
          <linearGradient id="bluePurple" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.7)" /> {/* blue-500 at 70% opacity */}
            <stop offset="50%" stopColor="rgba(147, 51, 234, 0.7)" /> {/* purple-600 at 70% opacity */}
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0.7)" /> {/* blue-500 at 70% opacity */}
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <path
          d={path}
          stroke="url(#bluePurple)"
          strokeWidth="3"
          fill="none"
          filter="url(#glow)"
          className="moving-line"
          style={{
            strokeDasharray: `${pathLength}px`,
            strokeDashoffset: `${pathLength}px`
          }}
        />
      </svg>
      <style jsx>{`
        .moving-line {
          animation: drawLine 30s linear infinite;
        }

        @keyframes drawLine {
          0% {
            stroke-dashoffset: ${pathLength}px;
          }
          50% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: -${pathLength}px;
          }
        }
      `}</style>
    </div>
  );
};

export default GridBackground;
