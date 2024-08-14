import { Character } from '@/models/Character';

import { Skeleton } from '../shared';
import { GalleryListItem } from './GalleryListItem';

interface GalleryListProps {
  characters: Character[] | null;
  gallerySize: number;
  isLoading: boolean;
}

export const GalleryList = ({ characters, gallerySize, isLoading }: GalleryListProps) => {
  return (
    <ul className="grid w-full grid-cols-auto-fill gap-4 md:gap-6">
      {isLoading &&
        Array.from({ length: gallerySize }).map((_, index) => (
          <Skeleton className="mx-auto h-[230px] max-w-[300px]" key={index} />
        ))}

      {characters?.length === 0 ? (
        <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-bold">
          No characters found.
        </p>
      ) : (
        characters?.map((character) => (
          <GalleryListItem character={character} key={character.id} />
        ))
      )}
    </ul>
  );
};
