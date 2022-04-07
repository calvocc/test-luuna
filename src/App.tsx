import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { ThemeProvider } from 'styled-components';

import { lightTheme } from './styles/theme';
import {StyleGeneral} from './styles/styles';

import * as ROUTES from './constans/rutas';

import FooterComponen from './components/footer';
import NavbarComponent from './components/navbar';

import NofoundPage from './screens/nofound';
import UsersPage from './screens/users';
import RepositoriesPage from './screens/repositories';

function App() {
  const [windowHeight, setWindowHeight] = useState(0);
  
  let resizeWindow = () => {
    setWindowHeight(window.innerHeight);
  };

  useEffect(() => {
    resizeWindow();
    window.addEventListener("resize", resizeWindow);
    return () => window.removeEventListener("resize", resizeWindow);
  }, []);

  return (
    <ThemeProvider theme={lightTheme}>
      <StyleGeneral windowHeight={windowHeight}>
        <BrowserRouter>
          <Routes>
            <Route path={ROUTES.USERS} element={<NavbarComponent />} >
              <Route path={ROUTES.USERS} element={<UsersPage />} />
              <Route path={ROUTES.REPOSITORIES} element={<RepositoriesPage />} />
            </Route>
            <Route path="*" element={<NofoundPage />} />
          </Routes>
        </BrowserRouter>
        <FooterComponen />
      </StyleGeneral>
    </ThemeProvider>
  );
}

export default App;
