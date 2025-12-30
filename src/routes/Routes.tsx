import { lazy } from 'react';

const HomePage = lazy(() => import('src/pages/home/HomePage'));
const CodingPage = lazy(() => import('src/pages/coding/CodingPage'));
const ArticlePage = lazy(() => import('src/components/articlePage/ArticlePage'));
const AuthorPage = lazy(() => import('src/pages/author/AuthorPage'));
const WritersPage = lazy(() => import('src/pages/writers/WritersPage'));
const StoriesPage = lazy(() => import('src/pages/stories/StoriesPage'));
const ReviewsPage = lazy(() => import('src/pages/reviews/ReviewsPage'));
const VideoGamesPage = lazy(() => import('src/pages/videoGames/VideoGamesPage'));
const SeriesPage = lazy(() => import('src/pages/series/SeriesPage'));
type Route = {
  path?: string;
  element?: any;
};

const routes: Route[] = [
  {
    path: '/coding',
    element: CodingPage,
  },
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
    path:'/stories',
    element: StoriesPage,
  }, 
  {
    path:'/reviews',
    element: ReviewsPage,
  },
  {
    path:'/videoGames',
    element: VideoGamesPage,
  },
  {
    path: '/series/:id',
    element: SeriesPage,
  },
];

export default routes;
