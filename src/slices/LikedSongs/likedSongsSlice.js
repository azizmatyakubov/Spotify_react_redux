import { createSlice } from "@reduxjs/toolkit"

const likedSongSlice = createSlice({
  name: "likedSong",
  initialState: {
    content: [],
  },
  reducers: {
    toggleAddRemoveLikedSong: (state, action) => {
      return {
        ...state,
        content:
          // state.content.includes(action.payload) // state.content.findIndex( song => song.id === action.payload.id) !== -1
          state.content.some((song) => song.id === action.payload.id)
            ? [state.content.filter((song) => song.id !== action.payload.id)]
            : [...state.content, action.payload],
      }
    },
  },
})

export default likedSongSlice.reducer

export const { toggleAddRemoveLikedSong } = likedSongSlice.actions
