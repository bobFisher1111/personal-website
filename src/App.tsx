import React, { Suspense, useEffect } from 'react';
import {
  Routes, Route, BrowserRouter,
} from 'react-router-dom';
import { AppDispatch } from './store/redux/store';
import { useDispatch } from 'react-redux';
import GetWebsiteData from './store/redux/webSiteData/GetWebsiteData';
import Layout from './layout/Layout';
import routes from './routes/Routes';
import './App.css';

const App: React.FC<Props> = ({ position }) => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(GetWebsiteData())
  }, []);

  return (
    <BrowserRouter>
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
                element={<Component/>}
                key={path}
              />
            )))}
          </Routes>
        </div>
      </Suspense>
    </BrowserRouter>
  );
}

export type Props = {
  position?: {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
  };
};

export default App;
