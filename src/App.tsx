import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { RootState } from './store/redux/store';
import { darkTheme, lightTheme } from './store/redux/theme/CONSTANTS';
import Layout from './layout/Layout';
import AppRoutes from './AppRoutes'; // ✅ new import

import UsersAcceptanceComponent from './usersAcceptanceComponent/UsersAcceptanceComponent';

const App = () => {
  const theme = useSelector((state: RootState) => state.theme);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme?.darkTheme ? darkTheme : lightTheme}>
        <CssBaseline />
        <Suspense fallback={<div>Loading...</div>}>
          <UsersAcceptanceComponent />
          <Layout />
          <div className="app">
            <AppRoutes />
          </div>
        </Suspense>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
