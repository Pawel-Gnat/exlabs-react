import { useCharacters } from '../hooks/useCharacters';

import { Skeleton } from '../components/Skeleton';

const HomePage = () => {
  const { characters, isLoading } = useCharacters();

  if (isLoading) {
    return <Skeleton />;
  }

  return (
    <div>
      <h1 className="font-bold">Home</h1>

      {characters.map((character) => (
        <p key={character.id}>{character.name}</p>
      ))}
    </div>
  );
};

export default HomePage;
