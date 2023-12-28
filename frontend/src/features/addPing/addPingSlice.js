import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import addPingService from './addPingService.js'

const initialState = {
  user: null,
  isError: false,
  isSucces: false,
  isLoading: false,
  message: '',
}

export const addPing = createAsyncThunk(
  'addPing/add',
  async (user, thunkAPI) => {
    try {
      const data = await addPingService(user)
      console.log(data)
    } catch (err) {
      const message = err.message || err.toString()

      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const addPingSlice = createSlice({
  name: 'addPing',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
})

export default addPingSlice.reducer
