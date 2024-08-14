import { Heading1 } from '../components/shared';

import { Link } from '../components/ui';

const NotFoundPage = () => {
  return (
    <div className="m-auto text-center">
      <Heading1 text="Page not found" />
      <Link to="/" text="Back to Gallery" />
    </div>
  );
};

export default NotFoundPage;
