import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Weather } from "../../types";
import { convert } from "../../utils";
import HighLightItem from "../HighLightItem";

type Props = {
  currentWeather: Weather;
};

const testId = `weather-other-info`;

export default function WeatherDetailSection2(props: Props) {
  const { currentWeather } = props;

  return (
    <Box className="weather-detail2" data-testid={testId}>
      <Grid container spacing={2}>
        <Grid item xs={6} sm={4} md={3} lg={2} className="highlight-item-box">
          <HighLightItem title="Wind Status">
            <Box className="wind-detail">
              <Typography variant="h5">{currentWeather.wind.speed}</Typography>
              <Typography variant="h6">km/h</Typography>
            </Box>
          </HighLightItem>
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2} className="highlight-item-box">
          <HighLightItem title="Humidity">
            <Box className="wind-detail">
              <Typography variant="h5">
                {currentWeather.main.humidity}
              </Typography>
              <Typography variant="h6">%</Typography>
            </Box>
          </HighLightItem>
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2} className="highlight-item-box">
          <HighLightItem title="Visibility">
            <Box className="wind-detail">
              <Typography variant="h5">{currentWeather.visibility}</Typography>
              <Typography variant="h6">km</Typography>
            </Box>
          </HighLightItem>
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2} className="highlight-item-box">
          <HighLightItem title="Pressure">
            <Box className="wind-detail">
              <Typography variant="h5">
                {currentWeather.main.pressure}
              </Typography>
              <Typography variant="h6">mb</Typography>
            </Box>
          </HighLightItem>
        </Grid>
        <Grid item xs={12} sm={4} md={6} lg={2} className="highlight-item-box">
          <HighLightItem title="High/Low">
            <Box className="wind-detail">
              <Typography variant="h5">
                {currentWeather.main.temp_max}° / {currentWeather.main.temp_min}
                °
              </Typography>
            </Box>
          </HighLightItem>
        </Grid>
        <Grid item xs={12} sm={4} md={6} lg={2} className="highlight-item-box">
          <HighLightItem title="Sunrise/Sunset">
            <Box>
              <Typography variant="h5" className="wind-detail">
                <Box className="sun-time">
                  {convert(currentWeather.sys.sunrise)} AM /{" "}
                  {convert(currentWeather.sys.sunset)} PM
                </Box>
              </Typography>
            </Box>
          </HighLightItem>
        </Grid>
      </Grid>
    </Box>
  );
}
