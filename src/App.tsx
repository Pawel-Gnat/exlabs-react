import { useRef } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

import RootLayout from './layout/Layout';
import { CharacterPage, CharactersPage, HomePage, NotFoundPage } from './pages';

function App() {
  const location = useLocation();
  const parentDivRef = useRef<HTMLDivElement>(null);

  return (
    <SwitchTransition>
      <CSSTransition
        classNames="fade"
        key={location.pathname}
        nodeRef={parentDivRef}
        timeout={300}
        unmountOnExit
      >
        <div ref={parentDivRef}>
          <Routes location={location}>
            <Route element={<RootLayout />}>
              <Route element={<HomePage />} index />
              <Route element={<CharactersPage />} path="/characters" />
              <Route element={<CharacterPage />} path="/characters/:id" />
              <Route element={<NotFoundPage />} path="*" />
            </Route>
          </Routes>
        </div>
      </CSSTransition>
    </SwitchTransition>
  );
}

export default App;
