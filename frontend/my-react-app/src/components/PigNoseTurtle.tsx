import React from 'react';
import InfoCard from './InfoCard';
import { InfoCardProps } from './InfoCard';
import { TurtleDetail } from './TurtleDetails';


const infoCardData: InfoCardProps[] = [
  { title: "Size", description: "up to 70cm" },
  { title: "Diet", description: "Fish, river grass and other small aquatic animals" },
  { title: "Weight", description: "Up to 30kg" },
  { title: "Lifespan", description: "25-30 years" }
];

interface PigNoseTurtleProps {
    turtleDetails: TurtleDetail
}

const PigNoseTurtle: React.FC<PigNoseTurtleProps> = ({turtleDetails}) => {
  
  return (
    <article className="flex flex-col mt-8 px-0 max-w-[918px] font-serif">
      <p className="self-center px-5 text-xl font-light text-gray-600 max-md:max-w-full">
        {turtleDetails.turtleDescription}
      </p>
      <img 
        loading="lazy" 
        src={turtleDetails.image}
        alt="Pig nose turtle in its natural habitat" 
        className="self-start mt-8 w-full aspect-[1.33] max-md:mt-10 max-md:max-w-full" 
      />
      <h2 className="mt-8 w-full text-4xl text-black px-5 max-md:mt-10 max-md:max-w-full">
        Habitat
      </h2>
      <p className="mt-5 w-full text-xl font-light px-5 text-gray-600 max-md:max-w-full">
        {turtleDetails.turtleHabitat}
      </p>
      <h2 className="mt-8 w-full text-4xl px-5 text-black max-md:mt-10 max-md:max-w-full">
        What I do when I'm not in the museum
      </h2>
      <p className="mt-5 w-full text-xl px-5 font-light text-gray-600 max-md:max-w-full">
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