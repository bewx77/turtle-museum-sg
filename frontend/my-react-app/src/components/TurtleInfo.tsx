import React from "react";

interface TurtleInfoProps {
  title: string;
  description: string;
  habit: string;
  wild: string;
  weight: number;
  lifespan: string;
  size: number;
  diet: string;
}

const TurtleInfo: React.FC<TurtleInfoProps> = (props) => {
  return (
    <div>
      <h1>{props?.title}</h1>
      <p>{props?.habit}</p>
      <p> Hello World</p>;
    </div>
  );
};

export default TurtleInfo;
