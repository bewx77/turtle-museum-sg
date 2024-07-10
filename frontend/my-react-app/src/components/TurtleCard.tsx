import React from "react";

interface TurtleCardProps {
  image: string;
  title: string;
  subtitle: string;
}

const TurtleCard: React.FC<TurtleCardProps> = (props) => {
  return (
    <a href="/turtle-details">
      <div className="w-64 h-64 bg-white shadow-md ">
        <div className="h-2/3">
          <img src={props.image} className="object-cover h-full w-full" />
        </div>
        <div className="h-1/3 p-4 flex flex-col justify-center">
          <h2 className="sm:text-base md:text-lg lg:text-lg font-serif:Georgia font-semibold">
            {props.title}
          </h2>
          <p className="text-gray-600 font-serif:Georgia">{props.subtitle}</p>
        </div>
      </div>
    </a>
  );
};

export default TurtleCard;
