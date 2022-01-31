import React from "react";

//React keys

// [1,2,3,4,5,6,7] in order
// each render react render the element again and we want them to be in the same order

// each time that react lose the key and generate another one React remount the component

const SongCard = ({ title, paragraph, src }) => {
  return (
    <div className="card-container">
      <h3>{title}</h3>
      <picture className="card-image-container">
        <source src={src} type=".png" />
        <source src={src} type=".jpeg" />
        <img src={src} alt="This is the default image" />
      </picture>
      <p className="card-song-description">{paragraph}</p>
    </div>
  );
};

export default SongCard;
