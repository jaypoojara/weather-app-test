import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Weather } from "../../types";
import { capitalizeWord, getMonthNames, showDay } from "../../utils";

type Props = {
  currentWeather: Weather;
};

const testId = `weather-temp-detail`;

export default function WeatherDetailSection1(props: Props) {
  const { currentWeather } = props;
  const monthNames = getMonthNames();

  return (
    <Box className="weather-detail1" data-testid={testId}>
      <Box className="weather-detail-section wheater-box-shadow">
        <Box className="weather-img">
          <img
            src={`http://openweathermap.org/img/wn/${
              currentWeather.weather ? currentWeather.weather[0].icon : ""
            }.png`}
            alt=""
          />
        </Box>
        <Box className="weather-temp-section">
          <Typography variant="h3" className="weather-temp" gutterBottom>
            {currentWeather.main.temp}
          </Typography>
          <Typography variant="h4" gutterBottom>
            °C
          </Typography>
        </Box>
        <Box className="weather-decs-section align-text-center">
          <Typography variant="h5" gutterBottom>
            {currentWeather.weather &&
              capitalizeWord(currentWeather.weather[0].description)}
          </Typography>
        </Box>
        <Box className="weather-name-country align-text-center">
          <Typography variant="h6" gutterBottom>
            {currentWeather.name}, {currentWeather.sys.country}
          </Typography>
        </Box>
        <Box className="weather-date-section align-text-center">
          <Typography variant="h6" gutterBottom>
            {showDay(new Date().getDay())}, {new Date().getDate()}{" "}
            {monthNames[new Date().getMonth()]}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
