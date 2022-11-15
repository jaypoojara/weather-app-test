import { fireEvent, render, screen } from "@testing-library/react";

import SearchBar from "./SearchBar";
import "@testing-library/jest-dom/extend-expect";

const testId = `search-bar`;
describe("SearchBar", () => {
  it("SearchBar component", async () => {
    const city = "";
    const setCity = jest.fn();
    const fetchWeatherDetail = jest.fn();
    render(
      <SearchBar
        city={city}
        setCity={setCity}
        fetchWeatherDetail={fetchWeatherDetail}
      />
    );

    const SearchBarComp = screen.getByTestId(testId);
    expect(SearchBarComp).toBeDefined();
  });

  it("SearchBar temp", async () => {
    const city = "";
    const setCity = jest.fn();
    const fetchWeatherDetail = jest.fn();
    render(
      <SearchBar
        city={city}
        setCity={setCity}
        fetchWeatherDetail={fetchWeatherDetail}
      />
    );
    const SearchBarComp = screen.getByTestId(`${testId}-search-input`);
    expect(SearchBarComp).toBeDefined();

    fireEvent.change(SearchBarComp, { target: { value: "Chicago" } });

    expect(setCity).toBeCalled();
  });
});
