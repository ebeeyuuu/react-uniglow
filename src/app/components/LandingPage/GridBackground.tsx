'use client';

import React from 'react';

interface GridBackgroundProps {
  className?: string;
  lineColor?: string;
  gridColor?: string;
  vignetteIntensity?: number;
}

const GridBackground: React.FC<GridBackgroundProps> = ({
  className = '',
  lineColor = 'rgba(255, 255, 255, 0.1)',
  gridColor = 'rgba(255, 255, 255, 0.05)',
  vignetteIntensity = 0.8
}) => {
  const paths = [
    "M0,100 Q25,75 50,100 T100,100",
    "M20,0 C60,40 40,60 20,100",
    "M80,0 C40,40 60,60 80,100",
  ];

  return (
    <div
      className={`absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <div 
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: `radial-gradient(
            circle at center,
            transparent 0%,
            rgba(0, 0, 0, ${vignetteIntensity}) 100%
          )`
        }}
      />

      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="grid"
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 32 L32 0 Z"
              strokeWidth="1"
              stroke={gridColor}
              fill="transparent"
            />
            <path
              d="M32 32 L0 0 Z"
              strokeWidth="1"
              stroke={gridColor}
              fill="transparent"
            />
          </pattern>

          {paths.map((_, index) => (
            <linearGradient
              key={`gradient-${index}`}
              id={`gradient-${index}`}
              gradientUnits="userSpaceOnUse"
            >
              <stop
                offset="0%"
                stopColor={lineColor}
                stopOpacity="0"
              />
              <stop
                offset="50%"
                stopColor={lineColor}
                stopOpacity="1"
              />
              <stop
                offset="100%"
                stopColor={lineColor}
                stopOpacity="0"
              />
            </linearGradient>
          ))}

          {paths.map((path, index) => (
            <path
              key={`path-${index}`}
              id={`motionPath-${index}`}
              d={path}
              stroke="none"
              fill="none"
            />
          ))}
        </defs>

        <rect
          width="100%"
          height="100%"
          fill="url(#grid)"
        />

        <g>
          {paths.map((_, index) => (
            <g key={index} className="animate-[move_8s_ease-in-out_infinite]">
              <circle
                r="3"
                fill={`url(#gradient-${index})`}
                style={{
                  filter: 'blur(3px)',
                }}>
                <animateMotion
                  dur={`${6 + index * 2}s`}
                  repeatCount="indefinite"
                  path={paths[index]}
                />
              </circle>
              <path
                d={paths[index]}
                stroke={`url(#gradient-${index})`}
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
                style={{
                  filter: 'blur(1px)',
                }}>
              </path>
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
};

export default GridBackground;
