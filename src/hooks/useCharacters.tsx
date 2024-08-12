import axios from 'axios';
import { useEffect, useRef, useState } from 'react';

import { DB_URL } from '../database';

export const useCharacters = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [characters, setCharacters] = useState([]);
  const controllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      const newController = new AbortController();
      controllerRef.current = newController;

      try {
        setIsLoading(true);
        const response = await fetch(`${DB_URL}/character`, {
          signal: newController.signal,
        });

        if (response.ok) {
          const data = await response.json();
          setCharacters(data.results);
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          if (error.response && error.response.data) {
            console.error(`Response error: ${error.response.data.error}`);
          } else {
            console.error('Response error: unknown error');
          }
        } else {
          console.error(error);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  return {
    characters,
    isLoading,
  };
};
