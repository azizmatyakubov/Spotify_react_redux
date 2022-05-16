import React from "react"
import { toggleAddRemoveLikedSong } from "../slices/LikedSongs/likedSongsSlice"
import { addToSelectedSong } from "../slices/selectedSong/selectedSongSlice";
import { useDispatch } from "react-redux";

const Song = ({ track }) => {
  const dispatch = useDispatch();

  return (
    <div className="py-3 trackHover pr-3">
      <i
        className="pl-3 mr-1 bi bi-heart song-heart"
        onClick={() => dispatch(toggleAddRemoveLikedSong(track))}
      ></i>
      <span
        className="card-title trackHover px-3"
        style={{ color: "white" }}
        onClick={() => {
          dispatch(addToSelectedSong(track));
        }}
      >
        {track.title}
      </span>
      <small className="duration " style={{ color: "white" }}>
        {Math.floor(parseInt(track.duration) / 60)}:
        {parseInt(track.duration) % 60 < 10
          ? "0" + (parseInt(track.duration) % 60)
          : parseInt(track.duration) % 60}
      </small>
    </div>
  );
};

export default Song;

