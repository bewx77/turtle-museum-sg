import React from 'react';
import InfoCard from './InfoCard';
import { InfoCardProps } from './InfoCard';
import { TurtleDetail } from './TurtleDetails';

const infoCardData: InfoCardProps[] = [
  { iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/3190deef4f1023b7d712d3592339a0f84af8cc1446dc1e66d8970a5dbd605c30?apiKey=81930ef26dff4457b3b169a34fed7ac9&", title: "Size", description: "up to 70cm" },
  { iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/3190deef4f1023b7d712d3592339a0f84af8cc1446dc1e66d8970a5dbd605c30?apiKey=81930ef26dff4457b3b169a34fed7ac9&", title: "Diet", description: "Fish, river grass and other small aquatic animals" },
  { iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/3190deef4f1023b7d712d3592339a0f84af8cc1446dc1e66d8970a5dbd605c30?apiKey=81930ef26dff4457b3b169a34fed7ac9&", title: "Size", description: "up to 70cm" },
  { iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/3190deef4f1023b7d712d3592339a0f84af8cc1446dc1e66d8970a5dbd605c30?apiKey=81930ef26dff4457b3b169a34fed7ac9&", title: "Size", description: "up to 70cm" }
];

interface PigNoseTurtleProps {
    turtleDetails: TurtleDetail
}

const PigNoseTurtle: React.FC<PigNoseTurtleProps> = ({turtleDetails}) => {
    
  return (
    <article className="flex flex-col px-5 max-w-[918px]">
      <p className="self-center text-xl font-light text-black max-md:max-w-full">
        {turtleDetails.turtleDescription}
      </p>
      <img 
        loading="lazy" 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/06a736517404602095633479315b61d90d6a6c6b491dcdc74fe2a2fcd5f6ba59?apiKey=81930ef26dff4457b3b169a34fed7ac9&" 
        alt="Pig nose turtle in its natural habitat" 
        className="self-start mt-14 w-full aspect-[1.33] max-md:mt-10 max-md:max-w-full" 
      />
      <h2 className="mt-12 w-full text-4xl text-black max-md:mt-10 max-md:max-w-full">
        Habitat
      </h2>
      <p className="mt-10 w-full text-xl font-light text-black max-md:max-w-full">
        {turtleDetails.turtleHabitat}
      </p>
      <h2 className="mt-12 w-full text-4xl text-black max-md:mt-10 max-md:max-w-full">
        What I do when I'm not in the museum
      </h2>
      <p className="mt-8 w-full text-xl font-light text-black max-md:max-w-full">
        {turtleDetails.turtleInTheWild}
      </p>
      <section className="mt-14 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {infoCardData.slice(0, 2).map((card, index) => (
            <div key={index} className={`flex flex-col w-6/12 ${index === 1 ? 'ml-5' : ''} max-md:ml-0 max-md:w-full`}>
              <InfoCard {...card} />
            </div>
          ))}
        </div>
      </section>
      <section className="mt-14 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {infoCardData.slice(2, 4).map((card, index) => (
            <div key={index} className={`flex flex-col w-6/12 ${index === 1 ? 'ml-5' : ''} max-md:ml-0 max-md:w-full`}>
              <InfoCard {...card} />
            </div>
          ))}
        </div>
      </section>
    </article>
  );
};

export default PigNoseTurtle;