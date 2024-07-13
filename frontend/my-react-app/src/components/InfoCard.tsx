import React from 'react';

export interface InfoCardProps {
  iconSrc: string;
  title: string;
  description: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ iconSrc, title, description }) => {
  return (
    <div className="flex flex-col grow justify-center px-6 py-4 w-full bg-white border border-green-50 border-solid shadow-sm max-md:px-5 max-md:mt-10">
      <div className="flex flex-col justify-center">
        <div className="flex gap-5 justify-between">
          <img loading="lazy" src={iconSrc} alt="" className="shrink-0 w-24 aspect-square" />
          <div className="flex flex-col my-auto">
            <div className="text-lg text-black">{title}</div>
            <div className="mt-1 text-sm text-zinc-700">{description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;