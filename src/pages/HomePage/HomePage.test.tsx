import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { mockedWeatherData } from "../../service/index.test";
import HomePage from "./HomePage";
import "@testing-library/jest-dom/extend-expect";
import axios from "axios";
import store from "../../store/store";
import { Provider } from "react-redux";

const testId = `home-page`;
describe("HomePage", () => {
  it("HomePage component", async () => {
    render(<Provider store={store}><HomePage /></Provider>);

    const HomePageComp = screen.getByTestId(testId);
    expect(HomePageComp).toBeDefined();
  });

  it("HomePage component", async () => {
    render(<Provider store={store}><HomePage /></Provider>);

    const SearchBarComp = screen.getByTestId(`search-bar-search-input`);
    expect(SearchBarComp).toBeDefined();

    fireEvent.change(SearchBarComp, { target: { value: "Chicago" } });
    axios.get = jest.fn().mockReturnValue({ data: mockedWeatherData });

    await waitFor(()=>{
        const WeatherComp = screen.getByTestId(`${testId}-weather`);
        expect(WeatherComp).toBeDefined();
    })

  });
});
