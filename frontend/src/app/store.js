import { configureStore } from '@reduxjs/toolkit'
import addPingReducer from '../features/addPing/addPingSlice'

export const store = configureStore({
  reducer: {
    addPing: addPingReducer,
  },
})

export default store
