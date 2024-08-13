import { useCharacters } from '../../hooks/useCharacters';

import { Skeleton } from '../shared/Skeleton';

import { GalleryListItem } from './GalleryListItem';

export const GalleryList = () => {
  const { characters, isLoading, isError } = useCharacters();

  if (isError) {
    return <p className="mt-10 text-center text-red-500">Failed to load characters.</p>;
  }

  return (
    <ul className="grid-cols-auto-fill grid w-full gap-4 md:gap-6">
      {isLoading &&
        Array.from({ length: 6 }).map((_, index) => (
          <Skeleton key={index} className="mx-auto h-[230px] max-w-[300px]" />
        ))}

      {characters?.length === 0 ? (
        <p className="text-center">No characters found</p>
      ) : (
        characters?.map((character) => (
          <GalleryListItem key={character.id} character={character} />
        ))
      )}
    </ul>
  );
};
