import React from "react";
// import { Link, BrowserRouter, Route, Routes } from 'react-router-dom';
// import TurtleInfo from "./TurtleInfo";


interface TurtleCardProps {
  image: string;
  title: string;
  subtitle: string;
  id: number;
}

const TurtleCard: React.FC<TurtleCardProps> = (props) => {
  const handleClick = () => {
    localStorage.setItem('cardTitle', props.title);
    console.log("Title set in local storage");
  };

  return (

      <a href={`/turtle-detail`} onClick={handleClick}> 
        <div className="w-64 h-64 bg-white shadow-md ">
          {/* <Routes>
            <Route path="/turtle-details/:title" Component={TurtleInfo}></Route>
          </Routes> */}
          
          <div className="h-2/3">
            <img src={props.image} className="object-cover h-full w-full" />
          </div>
          <div className="h-1/3 p-4 flex flex-col justify-center">
            <h2 className="sm:text-base md:text-lg lg:text-lg font-georgia font-semibold">{props.title}</h2>
            <p className="text-gray-600 font-georgia">{props.subtitle}</p>
          </div>
        </div>
      </a>

  );
};

export default TurtleCard;
