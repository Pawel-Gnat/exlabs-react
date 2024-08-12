import '@fontsource/lato';
import './App.css';

import { Routes, Route, BrowserRouter } from 'react-router-dom';

import RootLayout from './layout/Layout';

import { DetailPage, DetailsPage, HomePage, NotFoundPage } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/details" element={<DetailsPage />} />
          <Route path="/details/:id" element={<DetailPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
