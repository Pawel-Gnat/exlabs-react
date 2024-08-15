import { BrowserRouter, Route, Routes } from 'react-router-dom';

import RootLayout from './layout/Layout';
import { CharacterPage, CharactersPage, HomePage, NotFoundPage } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route element={<HomePage />} index />
          <Route element={<CharactersPage />} path="/characters" />
          <Route element={<CharacterPage />} path="/characters/:id" />
          <Route element={<NotFoundPage />} path="*" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
