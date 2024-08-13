import { useEffect, useState } from 'react';

import { useCharacterContext } from '../context/CharacterContext';

import { Character } from '../models/Character';

export const useCharacterById = (id: number) => {
  const { characters } = useCharacterContext();
  const [isLoading, setIsLoading] = useState(true);
  const [character, setCharacter] = useState<Character | null>(null);

  useEffect(() => {
    if (characters && characters.length > 0) {
      const foundCharacter = characters?.find((c) => c.id === Number(id)) || null;
      setCharacter(foundCharacter);
      setIsLoading(false);
    }
  }, [characters, id, isLoading]);

  return {
    isLoading,
    character,
  };
};
