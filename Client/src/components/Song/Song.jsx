import React from "react";

const Song = () => {
  return (
    <div className="flex-container">
      <div className="song-container">
        <header>
          <h2 className="song-title">title</h2>
        </header>
        <article>
          <p className="song">song</p>
          {/* <div className="body-song">body</div> */}
        </article>
        <picture>
          <source src="" />
          <img width={100} height={100} src="" alt="img" />
        </picture>
      </div>
      <div className="song-container">
        <header>
          <h2 className="song-title">translated title</h2>
        </header>
        <article>
          <p className="song">translated song</p>
          {/* <div className="body-song">body</div> */}
        </article>
        <picture>
          <source src="" />
          <img width={100} height={100} src="" alt="img" />
        </picture>
      </div>
    </div>
  );
};
export default Song;