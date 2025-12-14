import React, { Suspense, useEffect } from 'react';
import { BrowserRouter } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { AppDispatch, RootState } from './store/redux/store';
import GetWebsiteData from './store/redux/webSiteData/GetWebsiteData';
import { darkTheme, lightTheme } from './store/redux/theme/Theme';
import { setDarkTheme } from './store/redux/theme/ThemeSlice';
import Layout from './layout/Layout';
import AppRoutes from './AppRoutes'; // ✅ new import
import './App.css';

// Uncomment this component when user acceptance flow is ready
// import UsersAcceptanceComponent from '../src/components/usersAcceptanceComponent/UsersAcceptanceComponent';

const App: React.FC<Props> = () => {
  const dispatch = useDispatch<AppDispatch>();
  const theme = useSelector((state: RootState) => state.theme);

  useEffect(() => {
    dispatch(GetWebsiteData());
  }, [dispatch]);

  useEffect(() => {
    const stored = localStorage.getItem('darkMode');
    if (stored === 'true') dispatch(setDarkTheme(true));
    if (stored === 'false') dispatch(setDarkTheme(false));
  }, [dispatch]);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme?.darkTheme ? darkTheme : lightTheme}>
        <CssBaseline />
        <Suspense fallback={<div>Loading...</div>}>
          {/* <UsersAcceptanceComponent /> */}
          <Layout />
          <div className="app">
            <AppRoutes />
          </div>
        </Suspense>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export type Props = {
  position?: {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
  };
};

export default App;
