import React from "react";
import { useSelector } from "react-redux";

const Library = () => {
  const likedSong = useSelector((state) => state.likedSong.content);

  return (
    <div
      className="library-container"
      onClick={() => {
        //addSelectedSongProp(track);
      }}
    >
      {likedSong &&
        likedSong.map((song) => (
          <div className="library-song">
            <span
              className="card-title trackHover px-3"
              style={{ color: "white" }}
            >
              {song.title}
            </span>
            <small className="duration" style={{ color: "white" }}>
              {Math.floor(parseInt(song.duration) / 60)}:
              {parseInt(song.duration) % 60 < 10
                ? "0" + (parseInt(song.duration) % 60)
                : parseInt(song.duration) % 60}
            </small>
          </div>
        ))}
    </div>
  );
};

export default Library;
