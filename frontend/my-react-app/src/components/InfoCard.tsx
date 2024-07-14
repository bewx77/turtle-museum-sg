import React from 'react';
import DietIcon from '../assets/diet_icon.svg';
import SizeIcon from '../assets/size_icon.svg';
import WeightIcon from '../assets/weight_icon.svg';
import LifeSpanIcon from '../assets/lifespan_icon.svg';


export interface InfoCardProps {
  title: string;
  description: string;
}

const getIconSrc = (title: string) => {
  switch (title) {
    case 'Diet':
      return DietIcon;
    case 'Size':
      return SizeIcon;
    case 'Weight':
      return WeightIcon;
    case 'Lifespan':
      return LifeSpanIcon;
    default:
      return DietIcon; // A default icon in case the title doesn't match any case
  }
};

const InfoCard: React.FC<InfoCardProps> = ({title, description }) => {

  const iconSrc = getIconSrc(title);

  return (
    <div className="flex flex-row justify-start items-center px-6 py-4 w-full bg-white border border-green-50 border-solid drop-shadow max-md:px-5 max-md:mt-10">
      <div className="flex flex-col justify-center">
        <div className="flex gap-5 justify-between">
          <img src={iconSrc} alt="" className="shrink-0 w-24 aspect-square" />
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