import { GalleryList } from '../components/homepage/GalleryList';

import { Heading1 } from '../components/shared/Typography';

const HomePage = () => {
  return (
    <>
      <Heading1 text="Rick & Morty Gallery" />
      <GalleryList />
    </>
  );
};

export default HomePage;
