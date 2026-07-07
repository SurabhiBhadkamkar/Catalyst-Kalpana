import React from 'react';

interface RevealLayerProps {
  image: string;
  cursorX: number;
  cursorY: number;
}

export default function RevealLayer({ image, cursorX, cursorY }: RevealLayerProps) {
  // If mouse is offscreen/uninitialized (-999), don't show the reveal
  const isOffscreen = cursorX === -999 && cursorY === -999;

  return (
    <div
      className="absolute inset-0 bg-center bg-cover bg-no-repeat z-30 pointer-events-none transition-opacity duration-700"
      style={{
        backgroundImage: `url(${image})`,
        opacity: isOffscreen ? 0 : 1,
        // Radial gradient with premium soft feathering so there is no harsh hard-circle edge
        WebkitMaskImage: isOffscreen
          ? 'none'
          : `radial-gradient(circle 160px at ${cursorX}px ${cursorY}px, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 20%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0) 100%)`,
        maskImage: isOffscreen
          ? 'none'
          : `radial-gradient(circle 160px at ${cursorX}px ${cursorY}px, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 20%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0) 100%)`,
      }}
    />
  );
}
