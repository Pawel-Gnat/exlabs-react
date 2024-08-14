import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { CharacterProvider } from './context/CharacterContext';

import RootLayout from './layout/Layout';

import { DetailPage, DetailsPage, HomePage, NotFoundPage } from './pages';

function App() {
  return (
    <BrowserRouter>
      <CharacterProvider>
        <Routes>
          <Route element={<RootLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/details" element={<DetailsPage />} />
            <Route path="/details/:id" element={<DetailPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </CharacterProvider>
    </BrowserRouter>
  );
}

export default App;
