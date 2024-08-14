import { useParams } from 'react-router-dom';

import { useCharacterById } from '../hooks/useCharacterById';

import { Heading1 } from '../components/shared/Typography';
import { Skeleton } from '../components/shared/Skeleton';

import { Link } from '../components/ui';

const DetailPage = () => {
  const { id } = useParams();
  const { isLoading, character } = useCharacterById(Number(id));

  const renderDetailText = (label: string, text?: string) => {
    return isLoading ? (
      <Skeleton className="h-[28px] w-1/2 rounded-xl" />
    ) : (
      <p className="text-xl">
        {label}: <strong>{text}</strong>
      </p>
    );
  };

  return (
    <>
      <Heading1 text={isLoading && !character ? 'Loading...' : `${character?.name}`} />
      <div className="flex flex-col gap-4 md:flex-row">
        {isLoading ? (
          <Skeleton className="aspect-square rounded-xl md:flex-1" />
        ) : (
          <img
            src={character?.image}
            alt={character?.name}
            className="aspect-square rounded-xl object-cover shadow-2xl md:flex-1"
          />
        )}

        <div className="my-auto flex flex-1 flex-col gap-2">
          {renderDetailText('Species', character?.species)}
          {renderDetailText('Gender', character?.gender)}
          {renderDetailText('Origin', character?.origin.name)}
          {renderDetailText('Location', character?.location.name)}

          <Link to="/" text="Back to Gallery" />
        </div>
      </div>
    </>
  );
};

export default DetailPage;
