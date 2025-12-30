import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { RootState } from './store/redux/store';
import { darkTheme, lightTheme } from './store/redux/theme/Theme';
import Layout from './layout/Layout';
import AppRoutes from './AppRoutes'; // ✅ new import
import './App.css';

// Uncomment this component when user acceptance flow is ready
// import UsersAcceptanceComponent from '../src/components/usersAcceptanceComponent/UsersAcceptanceComponent';

const App: React.FC<Props> = () => {
  const theme = useSelector((state: RootState) => state.theme);

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
