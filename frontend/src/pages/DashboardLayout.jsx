import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Wrapper from "../assets/wrappers/DashboardLayout";
import Sidebar from "../components/Sidebar";
import { useDashboardContext } from "../hooks/useDashboardContext";

const DashboardLayout = () => {
  const { showSidebar } = useDashboardContext();
  return (
    <Wrapper className={`${showSidebar ? 'sidebar-open' : ''}`}>
      <Header />
      <main>
        <Sidebar />
        <div className="page">
          <Outlet />
        </div>
      </main>
    </Wrapper>
  );
};

export default DashboardLayout;
