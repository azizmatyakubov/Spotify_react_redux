import { configureStore } from '@reduxjs/toolkit'
import selectedSongReducer from '../slices/selectedSong/selectedSongSlice'

export default configureStore({

    reducer: {
        selectedSong: selectedSongReducer 
    }
})