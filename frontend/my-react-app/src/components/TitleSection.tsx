import React from 'react';

interface TitleSectionProps {
  title: string;
  subtitle: string;
}

const TitleSection: React.FC<TitleSectionProps> = ({ title, subtitle }) => {
  return (
    <div className="flex relative gap-5 ml-48 max-md:flex-wrap">
      <div className="shrink-0 w-2 bg-amber-600 border-amber-600 border-solid border-[2px] h-[158px] max-md:hidden" />
      <div className="flex flex-col grow shrink-0 my-auto basis-0 w-fit max-md:max-w-full">
        <p className="text-4xl max-md:max-w-full drop-shadow-2xl">{title}</p>
        <p className="text-3xl max-md:max-w-full drop-shadow-2xl">{subtitle}</p>
      </div>
    </div>
  );
};

export default TitleSection;