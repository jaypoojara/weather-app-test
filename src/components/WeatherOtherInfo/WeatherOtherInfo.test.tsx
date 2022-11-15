import { render, screen } from "@testing-library/react";
import { mockedWeatherData } from "../../service/index.test";
import WeatherOtherInfo from "./WeatherOtherInfo";
import "@testing-library/jest-dom/extend-expect";

const testId = `weather-other-info`;
describe("WeatherOtherInfo", () => {
  it("WeatherOtherInfo component", async () => {
    render(<WeatherOtherInfo currentWeather={mockedWeatherData} />);

    const WeatherOtherInfoComp = screen.getByTestId(testId);
    expect(WeatherOtherInfoComp).toBeDefined();
  });

  it("should be display wind speed on WeatherOtherInfo", async () => {
    const { container } = render(
      <WeatherOtherInfo currentWeather={mockedWeatherData} />
    );

    expect(container).toHaveTextContent(`${mockedWeatherData.wind.speed}`);
  });

  it("should be display humidity on WeatherOtherInfo", async () => {
    const { container } = render(
      <WeatherOtherInfo currentWeather={mockedWeatherData} />
    );

    expect(container).toHaveTextContent(`${mockedWeatherData.main.humidity}`);
  });

  it("should be display visibility on WeatherOtherInfo", async () => {
    const { container } = render(
      <WeatherOtherInfo currentWeather={mockedWeatherData} />
    );

    expect(container).toHaveTextContent(`${mockedWeatherData.visibility}`);
  });

  it("should be display pressure on WeatherOtherInfo", async () => {
    const { container } = render(
      <WeatherOtherInfo currentWeather={mockedWeatherData} />
    );

    expect(container).toHaveTextContent(`${mockedWeatherData.main.pressure}`);
  });
});
