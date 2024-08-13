import { useParams } from 'react-router-dom';

import { Heading1 } from '../components/shared/Typography';

const DetailPage = () => {
  const { id } = useParams();

  return (
    <>
      <Heading1 text={`Detail ${id}`} />
    </>
  );
};

export default DetailPage;
