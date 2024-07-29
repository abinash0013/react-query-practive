"use client";

import { useQuery } from "react-query";
import Nav from "../nav";
import axios from "axios";

const fetchSuperHeros = () => {
  return axios.get("http://localhost:4000/superheroes");
};
const RQHomePage = () => {
  const { isLoading, data } = useQuery("superheroes", fetchSuperHeros);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return (
    <>
      <Nav />
      <h1>RQ Home Page</h1>
      {data?.data.map((hero: any) => {
        return <div key={hero.name}>{hero.name}</div>;
      })}
    </>
  );
};

export default RQHomePage;
