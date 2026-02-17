import { Outlet } from 'react-router-dom'; 
import AppBarComponent from './appBar/AppBarComponent';

const Layout = () => {
  return (
    <>
      <AppBarComponent />
      <main className="App">
        <Outlet />
      </main>
    </>     
  );
};

export default Layout;