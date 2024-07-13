import React from 'react';

interface BackgroundImageProps {
  src: string;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({ src }) => {
  return (
    <img 
      src={src} 
      alt="" 
      className="object-cover absolute inset-0 size-full" 
      loading="lazy" 
    />
  );
};

export default BackgroundImage;