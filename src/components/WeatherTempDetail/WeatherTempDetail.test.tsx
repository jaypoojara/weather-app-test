import { render, screen } from "@testing-library/react";
import { mockedWeatherData } from "../../service/index.test";
import { capitalizeWord, getMonthNames } from "../../utils";
import WeatherTempDetail from "./WeatherTempDetail";
import "@testing-library/jest-dom/extend-expect";

const testId = `weather-temp-detail`;
describe("WeatherTempDetail", () => {
  it("WeatherTempDetail component", async () => {
    render(<WeatherTempDetail currentWeather={mockedWeatherData} />);

    const WeatherTempDetailComp = screen.getByTestId(testId);
    expect(WeatherTempDetailComp).toBeDefined();
  });

  it("WeatherTempDetail temp", async () => {
    const { container } = render(
      <WeatherTempDetail currentWeather={mockedWeatherData} />
    );

    expect(container).toHaveTextContent(`${mockedWeatherData.main.temp}`);
  });

  it("WeatherTempDetail description", async () => {
    const { container } = render(
      <WeatherTempDetail currentWeather={mockedWeatherData} />
    );

    expect(container).toHaveTextContent(
      capitalizeWord(mockedWeatherData.weather[0].description)
    );
  });

  it("WeatherTempDetail name and country", async () => {
    const { container } = render(
      <WeatherTempDetail currentWeather={mockedWeatherData} />
    );

    expect(container).toHaveTextContent(mockedWeatherData.name);
    expect(container).toHaveTextContent(mockedWeatherData.sys.country);
  });

  it("WeatherTempDetail name and country", async () => {
    const { container } = render(
      <WeatherTempDetail currentWeather={mockedWeatherData} />
    );

    const day = getMonthNames()[new Date().getMonth()];
    expect(container).toHaveTextContent(day);
  });
});
