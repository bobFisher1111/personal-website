import { lazy } from 'react';

const HomePage = lazy(() => import('../pages/home/HomePage'));
const CodingPage = lazy(() => import('../pages/coding/CodingPage'));
const Logout = lazy(() => import('../pages/logout/Logout'));
const Profile = lazy(() => import('../pages/profile/Profile'));
const ArticlePage = lazy(() => import('../components/articlePage/ArticlePage'));
const AuthorPage = lazy(() => import('../pages/author/AuthorPage'));
const WritersPage = lazy(() => import('../pages/writers/WritersPage'));
const StoriesPage = lazy(() => import('../pages/stories/StoriesPage'));
const ReviewsPage = lazy(() => import('../pages/reviews/ReviewsPage'));
const VideoGamesPage = lazy(() => import('../pages/videoGames/VideoGamesPage'));
const SeriesPage = lazy(() => import('../pages/series/SeriesPage'));

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
    path: '/logout',
    element: Logout,
  },
  {
    path: '/profile',
    element: Profile,
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
