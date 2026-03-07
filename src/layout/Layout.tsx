import { Outlet } from "react-router-dom";
import AppBarComponent from "./appBar/AppBarComponent";

const Layout = () => {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <AppBarComponent />
      <main className="App" id="main-content" tabIndex={-1}>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
