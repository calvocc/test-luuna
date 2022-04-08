import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';

import {useDimensions} from './hooks/useDimensions';
import { UserProvider } from './context/userProvider';

import { lightTheme } from './styles/theme';
import {StyleGeneral} from './styles/styles';

import * as ROUTES from './constans/rutas';

import FooterComponen from './components/footer';
import NavbarComponent from './components/navbar';

import NofoundPage from './screens/nofound';
import UsersPage from './screens/users';
import RepositoriesPage from './screens/repositories';

function App() {
 
  const {windowHeight} = useDimensions();

  return (
    <ThemeProvider theme={lightTheme}>
      <UserProvider>
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
      </UserProvider>
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
