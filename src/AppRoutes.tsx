import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router';
import routes from './routes/Routes';

const AppRoutes = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      {routes.map(({ path, element: Component }) => (
        <Route path={path} element={<Component />} key={path} />
      ))}
    </Routes>
  </Suspense>
);

export default AppRoutes;
