import HomePage from '../pages/home/HomePage';
import About from '../pages/about/About';
import VideoGames from '../pages/hobbies/VideoGames';
import Contact from '../pages/contact/Contact';
import Logout from '../pages/logout/Logout';
import DashboardAnalytics from '../pages/dashboardAnalytics/DashboardAnalytics';
import Profile from '../pages/profile/Profile';
import Projects from '../pages/projects/Projects';

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
    path: '/hobbies',
    element: VideoGames,
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
    path: '/codingprojects',
    element: Projects,
  },
];

export default routes;
