import React, { useEffect, useState } from 'react';

interface TransparentLogoProps {
  src: string;
  className?: string;
  alt?: string;
}

export const TransparentLogo: React.FC<TransparentLogoProps> = ({ src, className, alt }) => {
  const [processedSrc, setProcessedSrc] = useState<string>(src);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      
      ctx.drawImage(img, 0, 0);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      
      // Make white/near-white background transparent
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        
        // Threshold of 235 out of 255 to catch any compressed jpeg artifacts in the white background
        if (r > 235 && g > 235 && b > 235) {
          data[i + 3] = 0; // Transparent
        }
      }
      
      ctx.putImageData(imageData, 0, 0);
      setProcessedSrc(canvas.toDataURL('image/png'));
    };
  }, [src]);

  return <img src={processedSrc} className={className} alt={alt} />;
};
