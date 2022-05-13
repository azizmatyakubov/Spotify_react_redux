import React from "react"
import { toggleAddRemoveLikedSong } from "../slices/LikedSongs/likedSongsSlice"
import { addToSelectedSong } from "../slices/selectedSong/selectedSongSlice";
import { connect } from "react-redux"

const mapStateToProps = (state) => {
  return {}
}
const mapDispatchToProps = (dispatch) => {
  return {
    addToLikedSongsProp: (song) => {
      dispatch(toggleAddRemoveLikedSong(song))
    },
    addSelectedSongProp: (song) => {
      dispatch(addToSelectedSong(song));
    },
  }
}


const Song = ({ track, addSelectedSongProp, addToLikedSongsProp }) => (
  <div
    className="py-3 trackHover pr-3"
    onClick={() => {
      addSelectedSongProp(track);
    }}
  >
    <i
      className="pl-3 mr-1 bi bi-heart song-heart"
      onClick={() => addToLikedSongsProp(track)}
    ></i>
    <span className="card-title trackHover px-3" style={{ color: "white" }}>
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

export default connect(mapStateToProps, mapDispatchToProps)(Song)

