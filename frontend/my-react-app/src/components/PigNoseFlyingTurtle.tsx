import React from 'react';
import BackgroundImage from './BackgroundImage';
import TitleSection from './TitleSection';

interface PigNoseFlyingTurtleProps {
  imageUrl: string;
  title: string;
  subtitle: string;
}

const PigNoseFlyingTurtle: React.FC<PigNoseFlyingTurtleProps> = ({ imageUrl, title, subtitle }) => {
  return (
    <section className="relative flex flex-col justify-center items-start px-16 py-14 font-bold text-white min-h-[270px] max-md:px-5 overflow-hidden font-serif">
      <BackgroundImage src={imageUrl} />
      <TitleSection title={title} subtitle={subtitle} />
    </section>
  );
};

export default PigNoseFlyingTurtle;