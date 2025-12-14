import React from 'react';
import { Routes, Route } from 'react-router';
import routes from './routes/Routes';

const AppRoutes = () => (
  <Routes>
    {routes.map(({ path, element: Component }) => (
      <Route path={path} element={<Component />} key={path} />
    ))}
  </Routes>
);

export default AppRoutes;
