import { Box } from "@mui/system";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar";
import WeatherTempDetail from "../../components/WeatherTempDetail";
import WeatherOtherInfo from "../../components/WeatherOtherInfo";
import { useAppDispatch, useAppSelector } from "../../store/redux-hooks";
import { fetchWeatherDetail } from "../../store/weather/weather-action";
import { Weather } from "../../types";
import { capitalizeWord } from "../../utils";

const testId = `home-page`;

export default function HomePage() {
  const dispatch = useAppDispatch();
  const [city, setCity] = useState<string>("");
  const [err, setErr] = useState<string>("");
  const [currentWeather, setCurrentWeather] = useState<Weather | null>(null);
  const weatherSelector = useAppSelector(
    (state) => state.weather.weatherDetail
  );

  useEffect(() => {
    setCurrentWeather(weatherSelector);
  }, [weatherSelector]);

  const SearchWeatherDetail = async (cityName: string) => {
    try {
      await dispatch(fetchWeatherDetail(cityName));
      setErr("");
    } catch (error) {
      if (error instanceof AxiosError && error.response?.status === 404) {
        setErr(error.response.data.message);
      } else if (
        error instanceof AxiosError &&
        error.response?.status === 400
      ) {
        setErr("");
      } else {
        setErr(error as string);
      }
      setCurrentWeather(null);
    }
  };
  return (
    <>
      <Box className="weather-app" data-testid={testId}>
        <SearchBar
          city={city}
          setCity={setCity}
          fetchWeatherDetail={SearchWeatherDetail}
        />
        {currentWeather && !err ? (
          <Box data-testid={`${testId}-weather`}>
            <WeatherTempDetail currentWeather={currentWeather} />
            <WeatherOtherInfo currentWeather={currentWeather} />
          </Box>
        ) : (
          <Box className={err ? "err-msg" : ""}>{capitalizeWord(err)}</Box>
        )}
      </Box>
    </>
  );
}
