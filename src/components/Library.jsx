import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    likedSong: state.likedSong.content,
  };
};

const library = ({ likedSong }) => {
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

export default connect(mapStateToProps)(library);
