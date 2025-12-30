//  used in parent route elements to render their child route elements
// if have a footer or header here, they will appear with all the children
//  for routing
import { Outlet } from 'react-router-dom'; 
import AppBarComponent from './appBar/AppBarComponent';

const Layout = () => {
  // header & footer in this file
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