import { DB_URL } from '../api';

import { useEffect, useRef, useState } from 'react';

import { Character } from '../types/types';

export const useCharacters = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [characters, setCharacters] = useState<Character[]>([]);
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
        if (error instanceof Error) {
          if (error.name === 'AbortError') {
            console.warn('Fetch aborted');
          } else {
            console.error('Fetch error:', error.message);
          }
        } else {
          console.error('Unexpected error', error);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchCharacters();

    return () => {
      if (controllerRef.current) {
        controllerRef.current.abort();
      }
    };
  }, []);

  return {
    characters,
    isLoading,
  };
};
