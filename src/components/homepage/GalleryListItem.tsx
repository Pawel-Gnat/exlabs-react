import { Character } from '../../models/Character';

interface GalleryListItemProps {
  character: Character;
}

export const GalleryListItem = ({ character }: GalleryListItemProps) => {
  return (
    <li className="relative mx-auto w-fit overflow-hidden rounded-xl shadow-2xl">
      <a href={`/details/${character.id}`}>
        <img src={character.image} alt={character.name} />
        <p className="absolute bottom-2 left-1/2 w-max -translate-x-1/2 rounded-xl border-2 bg-white px-4 py-2 font-bold">
          {character.name}
        </p>
      </a>
    </li>
  );
};
