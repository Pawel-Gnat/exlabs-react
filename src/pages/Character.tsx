import { Skeleton } from '@/components/shared/Skeleton';
import { Heading1 } from '@/components/shared/Typography';
import { Link } from '@/components/ui';
import { useCharacterById } from '@/hooks/useCharacterById';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const CharacterPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { character, isLoading } = useCharacterById(Number(id));

  const renderCharacterText = (label: string, text?: string) => {
    return isLoading ? (
      <Skeleton className="h-[28px] w-1/2 rounded-xl" />
    ) : (
      <p className="text-xl">
        {label}: <strong>{text}</strong>
      </p>
    );
  };

  useEffect(() => {
    if (!isLoading && !character) {
      navigate('/not-found');
    }
  }, [isLoading, character, navigate]);

  return (
    <>
      <Heading1 text={isLoading && !character ? 'Loading...' : `${character?.name}`} />
      <div className="flex flex-col gap-4 md:flex-row">
        {isLoading ? (
          <Skeleton className="aspect-square rounded-xl md:flex-1" />
        ) : (
          <img
            alt={character?.name}
            className="aspect-square rounded-xl object-cover shadow-2xl md:flex-1"
            src={character?.image}
          />
        )}

        <div className="my-auto flex flex-1 flex-col gap-2">
          {renderCharacterText('Species', character?.species)}
          {renderCharacterText('Gender', character?.gender)}
          {renderCharacterText('Origin', character?.origin.name)}
          {renderCharacterText('Location', character?.location.name)}

          <Link text="Back to Gallery" to="/" />
        </div>
      </div>
    </>
  );
};

export default CharacterPage;
