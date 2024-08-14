import { GalleryListItem } from './GalleryListItem';

import { Skeleton } from '../shared';

import { Character } from '../../models/Character';

interface GalleryListProps {
  gallerySize: number;
  isLoading: boolean;
  characters: Character[] | null;
}

export const GalleryList = ({ gallerySize, isLoading, characters }: GalleryListProps) => {
  return (
    <ul className="grid w-full grid-cols-auto-fill gap-4 md:gap-6">
      {isLoading &&
        Array.from({ length: gallerySize }).map((_, index) => (
          <Skeleton key={index} className="mx-auto h-[230px] max-w-[300px]" />
        ))}

      {characters?.length === 0 ? (
        <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-bold">
          No characters found.
        </p>
      ) : (
        characters?.map((character) => (
          <GalleryListItem key={character.id} character={character} />
        ))
      )}
    </ul>
  );
};
