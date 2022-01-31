import React from "react";
import { useLocation } from "react-router-dom";
import ListOfSongs from "../components/ListOfSongs/ListOfSongs";
import Song from "../components/Song/Song";

const Songs = () => {
  const location = useLocation();
  const path = location.pathname;
  return <>{path === "/songs" ? <ListOfSongs /> : <Song />}</>;
};
export default Songs;
