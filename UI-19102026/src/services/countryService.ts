import apiCountries from "../api/apicountries";


interface CityPopulation {
  city: string;
  populationCounts: {
    year: string;
    value: string;
    sex: string;
    reliabilty: string;
  }[];
}

interface ApiResponse {
  error: boolean;
  msg: string;
  data: CityPopulation[];   
}

export const getCityPopulation = async (
  country: string
): Promise<ApiResponse> => {
  const response = await apiCountries.post<ApiResponse>("", {
    country,
  });

  if (response.data.error) {
    throw new Error(response.data.msg);
  }

  return response.data;
};