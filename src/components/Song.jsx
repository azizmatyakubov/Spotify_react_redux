import React from "react";
import { connect } from "react-redux";
import { addToSelectedSong } from "../slices/selectedSong/selectedSongSlice";

const mapStateToProp = (state) => {
  return {};
};

const mapDispatchToProp = (dispatch) => {
  return {
    addSelectedSongProp: (song) => {
      dispatch(addToSelectedSong(song));
    },
  };
};

const Song = ({ track, addSelectedSongProp }) => (
  <div
    className="py-3 trackHover"
    onClick={() => {
      addSelectedSongProp(track);
    }}
  >
    <span className="card-title trackHover px-3" style={{ color: "white" }}>
      {track.title}1
    </span>
    <small className="duration" style={{ color: "white" }}>
      {Math.floor(parseInt(track.duration) / 60)}:
      {parseInt(track.duration) % 60 < 10
        ? "0" + (parseInt(track.duration) % 60)
        : parseInt(track.duration) % 60}
    </small>
  </div>
);

export default connect(mapStateToProp, mapDispatchToProp)(Song);
