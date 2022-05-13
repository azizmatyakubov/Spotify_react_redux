import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


const initialState = {
    song: ''
}

const selectedSong = createSlice({
  name: 'artist',
  initialState,
  reducers: {}
});

export const {} = selectedSong.actions

export default selectedSong.reducer