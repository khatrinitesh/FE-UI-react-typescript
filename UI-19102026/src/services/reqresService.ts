import axios from "axios";

export const getReqresProducts = async () => {
  const response = await axios.get(
    "https://reqres.in/api/collections/products/records",
    {
      headers: {
        "x-api-key": import.meta.env.VITE_REQRES_API_KEY,
        "X-Reqres-Env": "prod",
      },
    }
  );

  console.log(response.data);

  return response.data;
};