import { createSlice} from '@reduxjs/toolkit'


const initialState = {
    song: ''
}

const selectedSong = createSlice({
  name: 'selectedSong',
  initialState,
  reducers: {
    addToSelectedSong: (state, action) => {
      return {
      ...state,
      song: action.payload
      }
    }
  }
});

export const {addToSelectedSong} = selectedSong.actions

export default selectedSong.reducer