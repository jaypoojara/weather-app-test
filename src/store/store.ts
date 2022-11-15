import { configureStore } from '@reduxjs/toolkit'
import weatherSlice from './weather/weather-slice';

const reducer = {
  weather: weatherSlice.reducer
}

const store = configureStore({
  reducer: reducer,
  devTools: true,
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store;