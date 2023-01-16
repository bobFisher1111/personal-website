//  used in parent route elements to render their child route elements
// if have a footer or header here, they will appear with all the children
//  for routing
import { Outlet } from "react-router-dom"; 
import Header from './header/Header';

const Layout = () => {
  // header & footer in this file
  return (
    <>
      <Header />
      <main className="App">
        <Outlet />
      </main>
    </>     
  )
}

export default Layout;