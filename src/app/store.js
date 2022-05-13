import { configureStore } from "@reduxjs/toolkit"
import likedSongReducer from "../slices/LikedSongs/likedSongsSlice"

export default configureStore({
  reducer: {
    likedSong: likedSongReducer,
  },
})
