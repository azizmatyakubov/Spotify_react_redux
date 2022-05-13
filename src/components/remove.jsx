import { Row } from "react-bootstrap"
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
// have to display every track wich is in the redux store
const LikedSongs = (addToLikedSongsProp) => {
  return (
    <Row>
      {/*  <span className="card-title trackHover px-3" style={{ color: "white" }} onClick={() => addToLikedSongsProp(track)}>
        {track.title}
      </span> */}
    </Row>
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(LikedSongs)
