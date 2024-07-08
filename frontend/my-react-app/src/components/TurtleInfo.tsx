"use client";
import { useEffect, useState } from "react";
import { BuilderComponent, BuilderContent, builder } from "@builder.io/react";
import axios from "axios";

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
        const queryParams = new URLSearchParams(window.location.search);
        const handle = queryParams.get("name");

        if (!handle) {
          setError("Missing turtle handle.");
          console.log(handle);
          setLoading(false);
          return;
        }

        const param = encodeURIComponent(handle);

        const response = await axios.get(
          `https://cdn.builder.io/api/v2/content/turtle?apiKey=${import.meta.env
            .VITE_PUBLIC_BUILDER_KEY!}&query.data.turtleName=${param}`
        );
        console.log("here's the response");
        console.log(response);
        const turtleData = response.data?.results[0]?.data;

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
          <h1>{turtleDetails.turtleName}</h1>
          <h2>By: {turtleDetails.turtleHabitat}</h2>
          <h3>Published: {turtleDetails.turtleDescription}</h3>

          {/* Render the Builder drag-and-drop content */}
          <BuilderComponent
            name="turtle-data"
            options={{ includeRefs: true }}
          />
        </>
      )}
    </div>
  );
};

export default TurtleInfo;
