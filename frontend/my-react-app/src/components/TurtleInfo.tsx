"use client";
import { useEffect, useState } from "react";
import { builder } from "@builder.io/react";
import PigNoseFlyingTurtle from "./PigNoseFlyingTurtle";
import PigNoseTurtle from "./PigNoseTurtle";
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

// builder.init(import.meta.env.VITE_PUBLIC_BUILDER_KEY!);

const TurtleInfo: React.FC = () => {
  const [turtleDetails, setTurtleDetails] = useState<TurtleDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {

    const fetchTurtle = async () => {
      try {
        const title = localStorage.getItem('cardTitle');
        // const queryParams = new URLSearchParams(window.location.search);
        // const handle = queryParams.get("name");

        // if (!handle) {
        //   setError("Missing turtle handle.");
        //   console.log("loggin the handle" + handle);
        //   setLoading(false);
        //   return;
        // }

        // const param = encodeURIComponent(handle);
        // console.log( param);
        console.log(title);
        const turtle = await builder
        .get("turtle", {
          query: { 'data.turtleName': `${title}` }
        })
        .promise();
        console.log("here's the response");
        console.log(turtle);
        const turtleData = turtle.data;
        console.log(turtleData);
        if (!turtleData) {
          setError("Turtle not found.");
        } else {
          setTurtleDetails(turtleData);
        }
      } catch (err) {
        console.error("Error fetching turtle:", err);
        setError("Error fetching turtle.");
      } finally {
        setLoading(false);
      }
    };

    fetchTurtle();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      
      {turtleDetails && (
        <>
          <PigNoseFlyingTurtle imageUrl={turtleDetails.image} title={turtleDetails.turtleName} subtitle={turtleDetails.turtleScientificName} ></PigNoseFlyingTurtle>
          <PigNoseTurtle turtleDetails={turtleDetails}></PigNoseTurtle>
        </>
      )}
    </div>
  );
};

export default TurtleInfo;
