import { CharacterProvider } from '@/context/CharacterContext';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <CharacterProvider>
      <main className="mx-auto flex h-full min-h-screen max-w-5xl flex-1 flex-col p-4">
        <Outlet />
      </main>
    </CharacterProvider>
  );
};

export default RootLayout;
