import { configureStore } from '@reduxjs/toolkit'
import addPingReducer from '../features/addPing/addPingSlice'
import registerSlice from '../features/register/registerSlice'
import loginSlice from '../features/login/loginSlice'

export const store = configureStore({
  reducer: {
    addPing: addPingReducer,
    register: registerSlice,
    login: loginSlice,
  },
})

export default store
