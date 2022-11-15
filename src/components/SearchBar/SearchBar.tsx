import React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import useDebounce from "../../hooks/useDebounce";
import SearchIcon from '@mui/icons-material/Search';

type Props = {
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  fetchWeatherDetail: (cityName: string) => void;
};

const testId = `search-bar`;

export default function SearchBar(props: Props) {
  const { city, setCity, fetchWeatherDetail } = props;

  const searchCity = useDebounce((data: string) => {
    fetchWeatherDetail(data);
  }, 500);

  const handleChange = (data: string) => {
    setCity(data);
    searchCity(data);
  };

  return (
    <div className="search-section" data-testid={testId}>
      <FormControl sx={{ m: 1 }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-search">Search</InputLabel>
        <OutlinedInput
          id="outlined-adornment-search"
          value={city}
          onChange={(e) => handleChange(e.target.value)}
          endAdornment={<InputAdornment position="start"><SearchIcon /></InputAdornment>}
          label="Search"
          inputProps={{
            "data-testid": `${testId}-search-input`
          }}
        />
      </FormControl>
    </div>
  );
}
