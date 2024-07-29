"use client";
import { useState, useEffect } from "react";
import Nav from "../nav";
import axios from "axios";

const TraditionalHomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/superheroes").then((res) => {
      console.log("RESULT", res);
      setData(res.data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <Nav />
      <h2 className=" text-center font-bold tetx-lg">Super Heroes Page</h2>

      {data.map((hero: any) => {
        return <div key={hero.name}>{hero.name}</div>;
      })}
    </div>
  );
};
export default TraditionalHomePage;
