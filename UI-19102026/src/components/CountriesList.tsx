import { useState } from "react";
import { getCityPopulation } from "../services/countryService";

interface CityPopulation {
  city: string;
  populationCounts: {
    year: string;
    value: string;
    sex: string;
    reliabilty: string;
  }[];
}

export default function CountriesList() {
  const [country, setCountry] = useState("India");
  const [cities, setCities] = useState<CityPopulation[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchCities = async () => {
    try {
      setLoading(true);
      setError("");
      const response = await getCityPopulation(country);
      setCities(response.data);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to fetch cities."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <h1>City Population</h1>

      <input
        value={country}
        onChange={(event) => setCountry(event.target.value)}
        placeholder="Enter country name"
      />

      <button onClick={fetchCities} disabled={loading || !country.trim()}>
        {loading ? "Loading..." : "Get Cities"}
      </button>

      {error && <p role="alert">{error}</p>}

      <ul>
        {cities.map((city, index) => (
          <li key={`${city.city}-${index}`}>
            <strong>{city.city}</strong>

            {city.populationCounts?.map((item, itemIndex) => (
              <p key={`${item.year}-${itemIndex}`}>
                Year: {item.year} | Population: {item.value}
              </p>
            ))}
          </li>
        ))}
      </ul>
    </main>
  );
}