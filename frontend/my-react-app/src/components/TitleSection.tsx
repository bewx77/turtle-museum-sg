import React from 'react';

interface TitleSectionProps {
  title: string;
  subtitle: string;
}

const TitleSection: React.FC<TitleSectionProps> = ({ title, subtitle }) => {
  return (
    <div className="flex relative gap-5 ml-48 max-md:flex-wrap">
      <div className="shrink-0 w-3 bg-amber-600 border-amber-600 border-solid border-[2px] h-[158px] max-md:hidden" />
      <div className="flex flex-col grow shrink-0 my-auto basis-0 w-fit max-md:max-w-full">
        <h1 className="text-4xl max-md:max-w-full">{title}</h1>
        <h2 className="text-3xl max-md:max-w-full">{subtitle}</h2>
      </div>
    </div>
  );
};

export default TitleSection;