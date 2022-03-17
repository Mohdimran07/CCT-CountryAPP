import {
  Button,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import useFetchApi, { useFetchApiType } from "../hooks/useFetchApi";
import Error from "../utility/Error";

const CountryDetailsCard = ({ countryData }: any): JSX.Element => {
  const navigate: NavigateFunction = useNavigate();
  const countryCapital: string | undefined = countryData?.name?.common;
  const weatherURL: string =
    "http://api.weatherstack.com/current?access_key=3978b03a94f70dd2910cc2ecf6e8c005&query=";
  const { data }: useFetchApiType = useFetchApi(weatherURL, countryCapital);
  const [showWeatherData, setShowWeatherData] = useState<boolean>(false);

  const showWeatherHandler = (): void => {
    setShowWeatherData(true);
  };
  const backButtonHandler = (): void => {
    navigate("/");
  };
  return (
    <div>
      {!showWeatherData ? (
        <Card>
          <CardMedia
            component={"img"}
            src={countryData?.flags.png}
            alt="img"
          ></CardMedia>
          <CardContent> country: {countryData?.name?.common}</CardContent>
          <CardContent>capital: {countryData?.capital}</CardContent>
          <CardContent>population:{countryData?.population}</CardContent>
          <CardContent>
            latlng: {countryData?.latlng[0]}, {countryData?.latlng[1]}
          </CardContent>
          <Button variant="contained" onClick={showWeatherHandler}>
            show Capital Weather
          </Button>
        </Card>
      ) : (
        <>
          {data === " " ? (
            <div>
             <Error />
            </div>
          ) : (
            <div>
              <Card>
                <Typography>Capital: {data?.location?.name}</Typography>
                <Typography>LocalTime: {data?.location?.localtime}</Typography>
                <Typography>
                  Tempreature: {data?.current?.temperature}
                  <sup>o</sup>C
                </Typography>
                <Typography>
                  Description: {data?.current?.weather_descriptions[0]}
                </Typography>
                <CardMedia
                  component={"img"}
                  src={data?.current?.weather_icons?.[0]}
                  alt="img-icon"
                />
                <Typography>
                  wind_speed: {data?.current?.wind_speed} km/hr
                </Typography>
              </Card>
              <Button
                variant="contained"
                color="error"
                onClick={backButtonHandler}
              >
                Search Another country
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CountryDetailsCard;
