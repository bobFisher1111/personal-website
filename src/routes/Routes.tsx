import HomePage from '../pages/home/HomePage';
import About from '../pages/about/About';
import CodingPage from '../pages/coding/CodingPage';
import Logout from '../pages/logout/Logout';
import Profile from '../pages/profile/Profile';
import ArticlePage from '../components/articlePage/ArticlePage';
import AuthorPage from '../pages/author/AuthorPage';
import WritersPage from '../pages/writers/WritersPage';
import StoriesPage from '../pages/stories/StoriesPage';
import ReviewsPage from '../pages/reviews/ReviewsPage';
import VideoGamesPage from '../pages/videoGames/VideoGamesPage';
import SeriesPage from '../pages/series/SeriesPage';

type Route = {
  path?: string;
  element?: any;
};

const routes: Route[] = [
  {
    path: '/about',
    element: About,
  },
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
