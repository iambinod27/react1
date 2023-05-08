import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />

      <div className="container mx-auto p-10">
        <Outlet />
      </div>
    </>
  );
};
export default Layout;
