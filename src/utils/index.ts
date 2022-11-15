export function convert(t: number) {
  const dt = new Date(t);
  const hr = dt.getUTCHours();
  const m = "0" + dt.getUTCMinutes();
  return `${hr}:${m.slice(-2)}`;
}

export function capitalizeWord(value: string){
  return value.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())
}

export const getMonthNames = () => [
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
];

export const showDay = (value: number) => {
  if (value === 1) {
    return "Monday";
  } else if (value === 2) {
    return "Tuesday";
  } else if (value === 3) {
    return "Wednesday";
  } else if (value === 4) {
    return "Thursday";
  } else if (value === 5) {
    return "Friday";
  } else if (value === 6) {
    return "Saturday";
  } else if (value === 7) {
    return "Sunday";
  }
};
