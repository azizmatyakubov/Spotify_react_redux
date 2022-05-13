import { configureStore } from "@reduxjs/toolkit"
import likedSongReducer from "../slices/LikedSongs/likedSongsSlice"
import selectedSongReducer from '../slices/selectedSong/selectedSongSlice'
export default configureStore({
  reducer: {
    likedSong: likedSongReducer,
    selectedSong: selectedSongReducer 
  },
})
