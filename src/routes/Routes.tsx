import HomePage from '../pages/home/HomePage';
import About from '../pages/about/About';
import Coding from '../pages/coding/Coding';
import Contact from '../pages/contact/Contact';
import Logout from '../pages/logout/Logout';
import DashboardAnalytics from '../pages/dashboardAnalytics/DashboardAnalytics';
import Profile from '../pages/profile/Profile';
import Projects from '../pages/projects/Projects';
import ArticalPage from '../components/articalPage/ArticalPage';
import AuthorPage from '../pages/author/AuthorPage';
import WritersPage from '../pages/writers/WritersPage';
import StoriesPage from '../pages/stories/StoriesPage';
import ShowsMoviesPage from '../pages/showsMovies/ShowsMoviesPage';
import VideoGamesPage from '../pages/videoGames/VideoGamesPage';

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
    path: '/contact',
    element: Contact,
  },
  {
    path: '/dashboard',
    element: DashboardAnalytics,
  },
  {
    path: '/coding',
    element: Coding,
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
    path: '/projects',
    element: ArticalPage,
  },
  {
    path: '/artical/:id',
    element: ArticalPage,
  },
  {
    path: `/author/:id`,
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
    path:'/showsMovies',
    element: ShowsMoviesPage,
  },
  {
    path:'/videoGames',
    element: VideoGamesPage,
  }
];

export default routes;
