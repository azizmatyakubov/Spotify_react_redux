import { configureStore, combineReducers } from "@reduxjs/toolkit"
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import likedSongReducer from "../slices/LikedSongs/likedSongsSlice"
import selectedSongReducer from '../slices/selectedSong/selectedSongSlice'


const reducers = combineReducers({
  likedSong: likedSongReducer,
  selectedSong: selectedSongReducer 
})

const persistConfig = {
  key: 'root',
  storage: storage
}

const persistedReducer = persistReducer(persistConfig, reducers)


export default configureStore({
  reducer: persistedReducer
})
