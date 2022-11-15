import axios from "axios";
import { getWeatherDetailByCity } from "./index";

jest.mock('axios');

export const mockedWeatherData = {
  coord: {
    lon: -87.65,
    lat: 41.85,
  },
  weather: [
    {
      id: 804,
      main: "Clouds",
      description: "overcast clouds",
      icon: "04n",
    },
  ],
  base: "stations",
  main: {
    temp: 2.53,
    feels_like: -1.25,
    temp_min: 0.61,
    temp_max: 3.5,
    pressure: 1026,
    humidity: 58,
  },
  visibility: 10000,
  wind: {
    speed: 4.12,
    deg: 110,
  },
  clouds: {
    all: 100,
  },
  dt: 1668496136,
  sys: {
    type: 2,
    id: 2005153,
    country: "US",
    sunrise: 1668516017,
    sunset: 1668551422,
  },
  timezone: -21600,
  id: 4887398,
  name: "Chicago",
  cod: 200,
};
describe("Service", () => {
  
  it("getWeatherDetailByCity", async() => {
    axios.get = jest.fn().mockReturnValue({ data: mockedWeatherData});
    const res = await getWeatherDetailByCity("Chicago")
    expect(axios.get).toBeCalled()
    expect(res).toMatchObject(mockedWeatherData)
  });
});
