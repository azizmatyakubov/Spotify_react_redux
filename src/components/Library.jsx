import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    likedSongs: state.selectedSong.song,
  };
};

const library = ({ likedSongs }) => {
  return (
    <div
      className="library-container"
      onClick={() => {
        //addSelectedSongProp(track);
      }}
    >
      <div className="library-song">
        <span className="card-title trackHover px-3" style={{ color: "white" }}>
          {likedSongs.title}
        </span>
        <small className="duration" style={{ color: "white" }}>
          {Math.floor(parseInt(likedSongs.duration) / 60)}:
          {parseInt(likedSongs.duration) % 60 < 10
            ? "0" + (parseInt(likedSongs.duration) % 60)
            : parseInt(likedSongs.duration) % 60}
        </small>
      </div>
      <div className="library-song">
        <span className="card-title trackHover px-3" style={{ color: "white" }}>
          {likedSongs.title}
        </span>
        <small className="duration" style={{ color: "white" }}>
          {Math.floor(parseInt(likedSongs.duration) / 60)}:
          {parseInt(likedSongs.duration) % 60 < 10
            ? "0" + (parseInt(likedSongs.duration) % 60)
            : parseInt(likedSongs.duration) % 60}
        </small>
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(library);
