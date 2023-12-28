import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import registerService from './registerService.js'

const initialState = {
    isError: false,
    isSucces: false,
    isLoading: null,
    // user: null,
    message: '',
}

export const register = createAsyncThunk(
    'register/reg',
    async (user, thunkAPI) => {
        try {
            // console.log(user);
            return await registerService(user)
        } catch (err) {
            const message = err.message || err.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.isLoading = true
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false
                state.message = 'Done'
                state.data = action.payload
            })
    },
})

export default registerSlice.reducer