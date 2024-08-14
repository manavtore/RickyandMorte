// useFetchCharacters.js
import axios from "axios";
import { useEffect, useState } from "react";

const useFetchCharacters = (category) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      setError(null);

      try {
        let url = "https://rickandmortyapi.com/api/character";

      
        if (category === "Alive Characters") {
          url += "?status=alive";
        } else if (category === "Dead Characters") {
          url += "?status=dead";
        }

        const response = await axios.get(url);
        setCharacters(response.data.results);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [category]);

  return { characters, loading, error };
};

export default useFetchCharacters;
