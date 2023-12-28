import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import loginService from './loginService'

const initialState = {
    isError: false,
    isSucces: false,
    isLoading: null,
    user: null,
    message: '',
}

export const login = createAsyncThunk(
    'login/log',
    async (user, thunkAPI) => {
        try {
            // console.log(user);
            return await loginService(user)
        } catch (err) {
            const message = err.message || err.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.isLoading = true
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false
                state.message = 'Done'
                state.data = action.payload
            })
    },
})

export default loginSlice.reducer