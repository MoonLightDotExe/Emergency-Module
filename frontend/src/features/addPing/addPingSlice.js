import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import addPingService from './addPingService.js'

const initialState = {
  user: null,
  isError: false,
  isSucces: false,
  isLoading: null,
  data: null,
  type: null,
  message: '',
}

export const addPing = createAsyncThunk(
  'addPing/add',
  async (user, thunkAPI) => {
    try {
      return await addPingService(user)
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
  extraReducers: (builder) => {
    builder
      .addCase(addPing.pending, (state) => {
        state.isLoading = true
      })
      .addCase(addPing.fulfilled, (state, action) => {
        state.isLoading = false
        state.message = 'Loaded'
        state.data = action.payload
      })
  },
})

export default addPingSlice.reducer
