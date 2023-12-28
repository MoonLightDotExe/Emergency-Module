import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  isError: false,
  isSucces: false,
  isLoading: false,
  message: '',
}

export const addPingSlice = createSlice({
  name: 'addPing',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
})

export default addPingSlice.reducer
