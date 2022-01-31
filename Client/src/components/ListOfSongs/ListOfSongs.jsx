import React, { useState } from "react";
import SongCard from "../SongCard/SongCard";

const list = [
  {
    title: "Hello World",
    paragraph: "Lorem Iposom dolor Lorem Iposom dolorLorem Iposom dolor",
    src: "http://someAdressForImage",
  },
];

const ListOfSongs = () => {
  const [songsList] = useState(list);

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
