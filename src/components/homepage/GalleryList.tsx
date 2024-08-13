import { useCharacters } from '../../hooks/useCharacters';

import { Skeleton } from '../shared/Skeleton';

import { GalleryListItem } from './GalleryListItem';

export const GalleryList = () => {
  const { characters, isLoading } = useCharacters();

  if (isLoading) {
    return <Skeleton />;
  }

  return (
    <ul className="grid-cols-auto-fill grid w-full gap-4 md:gap-6">
      {characters.map((character) => (
        <GalleryListItem key={character.id} character={character} />
      ))}
    </ul>
  );
};
