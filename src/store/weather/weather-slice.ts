import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Weather } from "../../types/index"

type InitialState = {
  weatherDetail: Weather | null
}

const initialState: InitialState = {
  weatherDetail: null
};

const weatherSlice = createSlice({
  name: "weather",
  initialState: initialState,
  reducers: {
    setWeatherDetail(state, action:PayloadAction<Weather>){
      state.weatherDetail = action.payload
    }
  },
});

export default weatherSlice;