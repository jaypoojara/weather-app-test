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

  it("WeatherOtherInfo speed", async () => {
    const { container } = render(
      <WeatherOtherInfo currentWeather={mockedWeatherData} />
    );

    expect(container).toHaveTextContent(`${mockedWeatherData.wind.speed}`);
  });

  it("WeatherOtherInfo humidity", async () => {
    const { container } = render(
      <WeatherOtherInfo currentWeather={mockedWeatherData} />
    );

    expect(container).toHaveTextContent(`${mockedWeatherData.main.humidity}`);
  });

  it("WeatherOtherInfo visibility", async () => {
    const { container } = render(
      <WeatherOtherInfo currentWeather={mockedWeatherData} />
    );

    expect(container).toHaveTextContent(`${mockedWeatherData.visibility}`);
  });

  it("WeatherOtherInfo pressure", async () => {
    const { container } = render(
      <WeatherOtherInfo currentWeather={mockedWeatherData} />
    );

    expect(container).toHaveTextContent(`${mockedWeatherData.main.pressure}`);
  });
});
