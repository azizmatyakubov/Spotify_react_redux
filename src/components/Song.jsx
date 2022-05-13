import React from "react"
import { toggleAddRemoveLikedSong } from "../slices/LikedSongs/likedSongsSlice"
import { connect } from "react-redux"

const mapStateToProps = (state) => {
  return {}
}
const mapDispatchToProps = (dispatch) => {
  return {
    addToLikedSongsProp: (song) => {
      dispatch(toggleAddRemoveLikedSong(song))
    },
  }
}

const Song = ({ track, addToLikedSongsProp }) => (
  <div className="py-3 trackHover">
    <i className="ml-1 bi bi-heart" onClick={() => addToLikedSongsProp(track)}></i>
    <span className="card-title trackHover px-3" style={{ color: "white" }}>
      {track.title}
    </span>
    <small className="duration" style={{ color: "white" }}>
      {Math.floor(parseInt(track.duration) / 60)}:
      {parseInt(track.duration) % 60 < 10 ? "0" + (parseInt(track.duration) % 60) : parseInt(track.duration) % 60}
    </small>
  </div>
)

export default connect(mapStateToProps, mapDispatchToProps)(Song)
