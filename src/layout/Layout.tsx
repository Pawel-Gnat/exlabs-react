import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <main className="flex h-full flex-1 p-4">
      <Outlet />
    </main>
  );
};

export default RootLayout;
