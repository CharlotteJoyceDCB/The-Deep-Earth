'use client';

import { useMemo } from 'react';

const pixelsPerMeter = 40;
const depthStart = 0;
const depthEnd = 1200;
const stoneCount = 120;

const generateStones = (count: number) => {
  return Array.from({ length: count }).map((_, i) => {
    const depthMeters = Math.random() * (depthEnd - depthStart) + depthStart;
    const top = depthMeters * pixelsPerMeter;

    const normalizedDepth = (depthMeters - depthStart) / (depthEnd - depthStart);
    const brightness = 0.9 - normalizedDepth * 0.5;
    const opacity = 1 - normalizedDepth * 0.4;

    const size = Math.random() * 40 + 20;
    const left = Math.random() * 90;
    const hue = Math.random() * 30 + 20;

    return {
      id: i,
      top,
      left: `${left}%`,
      size,
      hue,
      rotate: Math.random() * 40 - 20,
      brightness,
      opacity,
    };
  });
};

const EmbeddedStones = () => {
  const stones = useMemo(() => generateStones(stoneCount), []);

  return (
    <>
      {stones.map((stone) => (
        <div
          key={stone.id}
          style={{
            position: 'absolute',
            top: `${stone.top}px`,
            left: stone.left,
            width: `${stone.size}px`,
            height: `${stone.size * 0.7}px`,
            backgroundColor: `hsl(${stone.hue}, 30%, 25%)`,
            borderRadius: '40% 60% 50% 50% / 50% 50% 60% 40%',
            transform: `rotate(${stone.rotate}deg)`,
            zIndex: 4,
            pointerEvents: 'none',
            filter: `brightness(${stone.brightness})`,
            opacity: stone.opacity,
            boxShadow: 'inset -2px -2px 4px rgba(0,0,0,0.3)',
          }}
        />
      ))}
    </>
  );
};

export default EmbeddedStones;
