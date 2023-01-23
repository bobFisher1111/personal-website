import React, { Suspense } from 'react';
import {
  Routes, Route, BrowserRouter, Link,
} from 'react-router-dom';
import Layout from './components/layout/Layout';
import routes from './routes/Routes';
import './App.css';

const App: React.FC<Props> = ({ position }) => {
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
