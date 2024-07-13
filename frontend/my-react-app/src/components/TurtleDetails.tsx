// import { useEffect, useState } from "react";
// import { BuilderComponent, BuilderContent, builder } from "@builder.io/react";
// import axios from "axios";

export interface TurtleDetail {
  turtleWeight: string;
  turtleName: string;
  turtleDiet: string;
  image: string;
  turtleDescription: string;
  turtleSize: string;
  turtleScientificName: string;
  turtleLifespan: string;
  turtleHabit: string;
  turtleHabitat: string;
  turtleInTheWild: string;
}

const TurtleDetails: React.FC<TurtleDetail> = (props) => {
    // const [queryParams, setQueryParams] = useState("");

    // setQueryParams(new URLSearchParams(window.location.search).toString);

    return (
        
  
        <div> 
          <div className="w-64 h-64 bg-white shadow-md ">
            {/* <p>params: {queryParams}</p> */}
          <h1>{props.turtleName}</h1>
          <h2>Habitat: {props.turtleHabitat}</h2>
          <h3>Published: {props.turtleDescription}</h3>
          </div>
        </div>
  
    );
  };
  
  export default TurtleDetails;