import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const likedSongSlice = createSlice({
  name: "likedSong",
  initialState: {
    content: [],
  },
  reducers: {
    addLikedSong: (state, action) => {
      return {
        ...state,
        content: [...state.content, action.payload],
      }
    },
    removeLikedSong: (state, action) => {
      return {
        ...state,
        content: state.content.filter((song, i) => i !== action.payload), // is it okay? "it's copy pasted"
      }
    },
  },
})

export default likedSongSlice.reducer

export const { addLikedSong, removeLikedSong } = likedSongSlice.actions
