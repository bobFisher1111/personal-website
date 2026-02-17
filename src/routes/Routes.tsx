import { lazy } from 'react';

const HomePage = lazy(() => import('src/pages/home/HomePage'));
const ArticlePage = lazy(() => import('src/pages/articlePage/ArticlePage'));
const AuthorPage = lazy(() => import('src/pages/author/AuthorPage'));
const WritersPage = lazy(() => import('src/pages/writers/WritersPage'));
const SeriesPage = lazy(() => import('src/pages/series/SeriesPage'));
type Route = {
  path?: string;
  element?: any;
};

const routes: Route[] = [
  {
    path: '/',
    element: HomePage,
  },
  {
    path: '/article/:id/:id/',
    element: ArticlePage,
  },
  {
    path: '/author/:id',
    element: AuthorPage,
  },
  {
    path:'/writers',
    element: WritersPage,
  },
  {
    path: '/series/:id',
    element: SeriesPage,
  },
];

export default routes;
