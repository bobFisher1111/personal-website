import React, { Suspense, useMemo } from 'react';
import {
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import { AppDispatch } from './store/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import {
  CssBaseline,
  ThemeProvider,
} from '@mui/material';
import GetWebsiteData from './store/redux/webSiteData/GetWebsiteData';
import { darkTheme, lightTheme } from './store/redux/theme/Theme';
import Layout from './layout/Layout';
import routes from './routes/Routes';
import './App.css';

const App: React.FC<Props> = () => {
  const dispatch = useDispatch<AppDispatch>();
  const theme = useSelector((state: any) => state.theme);
  useMemo(() => {
    dispatch(GetWebsiteData());
  }, []);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme?.darkTheme ? darkTheme : lightTheme}>
        <CssBaseline />
        <Suspense fallback={<div>Loading...</div>}>
          <Layout />
          <div className="app">
            <Routes>
              {routes.map(({
                path,
                element: Component,
              }) => ((
                <Route
                  path={path}
                  element={<Component />}
                  key={path}
                />
              )))}
            </Routes>
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
