import React, { useEffect, useState } from "react";
import SongCard from "../SongCard/SongCard";
import axios from "axios";

const ListOfSongs = () => {
  const [songsList, setSongsList] = useState([]);

  useEffect(() => {
    async function getSongs() {
      const { data: songs } = await axios.get(
        "http://localhost:5555/country/songs"
      );
      console.log(songs);
      if (!(songs instanceof Array)) return () => false;
      setSongsList(songs);
    }
    getSongs();
  }, []);

  console.log(songsList);
  // const list = [
  //   {
  //     title: "Hello World",
  //     paragraph: "Lorem Iposom dolor Lorem Iposom dolorLorem Iposom dolor",
  //     src: "http://someAdressForImage",
  //   },
  // ];

  // this was the template

  return (
    <>
      <header>
        <h1>Title</h1>
      </header>
      {songsList.map((cardAttr, index) => (
        <SongCard key={index} cardAttr={cardAttr} />
      ))}
    </>
  );
};

export default ListOfSongs;
