import { GalleryContainer } from '../components/homepage/GalleryContainer';

import { Heading1 } from '../components/shared/Typography';

const HomePage = () => {
  return (
    <>
      <Heading1 text="Rick & Morty Gallery" />
      <GalleryContainer />
    </>
  );
};

export default HomePage;
