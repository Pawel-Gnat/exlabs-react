import { DB_URL } from '@/api';
import { Character, CharacterResponseSchema } from '@/models/Character';
import { createContext, ReactNode, useContext, useEffect, useRef, useState } from 'react';

interface CharacterContextProps {
  characters: Character[] | null;
  isError: boolean;
  isLoading: boolean;
}

const initialState = {
  characters: null,
  isError: false,
  isLoading: false,
};

export const CharacterContext = createContext<CharacterContextProps>({
  ...initialState,
});

export const CharacterProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [characters, setCharacters] = useState<Character[] | null>(null);
  const controllerRef = useRef<AbortController | null>(null);

  const fetchCharacters = async () => {
    const newController = new AbortController();
    controllerRef.current = newController;

    try {
      setIsLoading(true);
      const response = await fetch(`${DB_URL}/character`, {
        signal: newController.signal,
      });

      if (!response.ok) {
        console.error('Fetch failed', response.status);
        setIsError(true);
        return;
      }

      const data = await response.json();
      const validationResult = CharacterResponseSchema.safeParse({
        characters: data.results,
      });

      if (!validationResult.success) {
        console.error('Validation failed:', validationResult.error.errors);
        setIsError(true);
        return;
      }

      setCharacters(validationResult.data.characters);
    } catch (error) {
      console.log(error);

      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          console.warn('Fetch aborted');
        } else {
          setIsError(true);
          console.error('Fetch error:', error.message);
        }
      } else {
        setIsError(true);
        console.error('Unexpected error', error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <CharacterContext.Provider value={{ characters, isError, isLoading }}>
      {children}
    </CharacterContext.Provider>
  );
};

export const useCharacterContext = () => useContext(CharacterContext);
