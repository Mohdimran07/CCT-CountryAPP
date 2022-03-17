import { Button, FormControl } from "@mui/material";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

const SearchCountry = (): JSX.Element => {
  const naviagte: NavigateFunction = useNavigate();
  const [countryName, setCountryName] = useState<string>("");
  const changeNameHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setCountryName(e.target.value);
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    naviagte(`${countryName}`);
  };

  return (
    <FormControl
      component={"form"}
      onSubmit={submitHandler}
      sx={{ paddingTop: "20px" }}
    >
      <input
        type="text"
        value={countryName}
        onChange={changeNameHandler}
        placeholder="Enter country name"
        required
      ></input>{" "}
      <br />
      <Button type="submit" variant="contained">
        Search
      </Button>
    </FormControl>
  );
};

export default SearchCountry;
