import { Character } from '@/models/Character';

interface GalleryListItemProps {
  character: Character;
}

export const GalleryListItem = ({ character }: GalleryListItemProps) => {
  return (
    <li className="relative mx-auto w-fit overflow-hidden rounded-xl shadow-2xl">
      <a className="group block" href={`/details/${character.id}`}>
        <img
          alt={character.name}
          className="transition-transform duration-300 group-hover:scale-105 group-focus:scale-105"
          src={character.image}
        />
        <p className="absolute bottom-2 left-1/2 w-max -translate-x-1/2 rounded-xl border-2 bg-white px-4 py-2 font-bold transition-opacity duration-300 group-hover:opacity-60 group-focus:opacity-60">
          {character.name}
        </p>
      </a>
    </li>
  );
};
