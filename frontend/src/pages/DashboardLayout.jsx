import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <>
      <nav>Header</nav>
      <Outlet />
      <footer>footer</footer>
    </>
  );
};

export default DashboardLayout;
