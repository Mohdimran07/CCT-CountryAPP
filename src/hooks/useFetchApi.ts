import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
export type useFetchApiType  = {
    data: any;
    error: boolean;
    isLoading: boolean;
}

const useFetchApi = (url: string, value: string | undefined): useFetchApiType => {
  const [data, setData] = useState<any>("");
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    const getData = async (): Promise<any> => {
      try {
        setIsLoading(true);
        const res: AxiosResponse<any, any> = await axios.get(url + value);
        console.log(res?.data);
        setData(res?.data);
      } catch (e) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    if (url && value) {
      getData();
    }
  }, []);
  return { data, error, isLoading };
};

export default useFetchApi;
