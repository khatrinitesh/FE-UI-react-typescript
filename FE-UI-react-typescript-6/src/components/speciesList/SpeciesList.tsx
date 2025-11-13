import { useEffect } from "react";
import { useSpeciesStore } from "../../store/speciesStore/useSpeciesStore";

const SpeciesList = () => {
  const { species, loading, error, fetchSpecies } = useSpeciesStore();

  useEffect(() => {
    fetchSpecies();
  }, [fetchSpecies]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {species.map((s) => (
        <li key={s.id}>
          <strong>{s.common_name}</strong> (<i>{s.scientific_name}</i>) -{" "}
          {s.conservation_status} - {s.group} - {s.iso_code}
        </li>
      ))}
    </ul>
  );
};

export default SpeciesList;
