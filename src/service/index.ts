import axios from "axios";

const APIKEY =  "858f15fed9292cbe25c341a754c55e45"

export const getWeatherDetailByCity = async(cityName: string) =>{
  const res = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${APIKEY}`
  );
  return res.data
}