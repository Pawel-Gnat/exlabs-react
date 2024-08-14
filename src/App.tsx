import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { CharacterProvider } from './context/CharacterContext';
import RootLayout from './layout/Layout';
import { DetailPage, DetailsPage, HomePage, NotFoundPage } from './pages';

function App() {
  return (
    <BrowserRouter>
      <CharacterProvider>
        <Routes>
          <Route element={<RootLayout />}>
            <Route element={<HomePage />} index />
            <Route element={<DetailsPage />} path="/details" />
            <Route element={<DetailPage />} path="/details/:id" />
            <Route element={<NotFoundPage />} path="*" />
          </Route>
        </Routes>
      </CharacterProvider>
    </BrowserRouter>
  );
}

export default App;
