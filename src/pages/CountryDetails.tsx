import { Box, CircularProgress } from "@mui/material";
import { useParams } from "react-router-dom";
import CountryDetailsCard from "../components/CountryDetailsCard";
import useFetchApi, { useFetchApiType } from "../hooks/useFetchApi";
import Error from "../utility/Error";

const CountryDetails = (): JSX.Element => {
  const countryName: string | undefined = useParams().name;
  const CountryURL: string = "https://restcountries.com/v3.1/name/";
  const { data, error, isLoading }: useFetchApiType = useFetchApi(CountryURL, countryName);
  return (
    <Box>
      {error ? (
        <Error />
      ) : isLoading ? (
        <div>
          <CircularProgress></CircularProgress> loading
        </div>
      ) : (
        <div style={{ display: "flex", paddingTop: "20px" }}>
          <CountryDetailsCard countryData={data?.[0]} />
        </div>
      )}
    </Box>
  );
};

export default CountryDetails;
