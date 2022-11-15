import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { getWeatherDetailByCity } from "../../service";
import { Weather } from "../../types";
import { RootState } from "../store";
import weatherSlice from "./weather-slice";


export const weatherAction = weatherSlice.actions

export const fetchWeatherDetail = (cityName: string): ThunkAction<void,RootState, unknown, AnyAction> =>{
    return async(dispatch, getState) =>{
        const response: Weather = await getWeatherDetailByCity(cityName)
        dispatch(weatherAction.setWeatherDetail(response))
    }
}