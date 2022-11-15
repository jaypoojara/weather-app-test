import { capitalizeWord, convert, getMonthNames, showDay } from "./index";

describe("Service", () => {
  it("getWeatherDetailByCity", async () => {
    const res = capitalizeWord("i am from chicago");
    expect(res).toBe("I Am From Chicago");
  });

  it("convert", async () => {
    const res = convert(1668497574);
    expect(res).toBe("7:28");
  });

  it("convert", async () => {
    const res = getMonthNames();
    expect(res).toMatchObject([
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ]);
  });

  it("convert", async () => {
    const res = showDay(1);
    expect(res).toBe("Monday");
  });
});
