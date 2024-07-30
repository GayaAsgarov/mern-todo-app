import Wrapper from "../assets/wrappers/Sidebar";
import { CiCircleList } from "react-icons/ci";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { IoStatsChartOutline } from "react-icons/io5";
import { ImProfile } from "react-icons/im";
import { Link } from "react-router-dom";
import { useDashboardContext } from "../hooks/useDashboardContext";

const Sidebar = () => {
  const { showSidebar } = useDashboardContext();

  return (
    <Wrapper className={showSidebar ? 'show' : ''}>
      <ul>
        <li>
          <Link to="/">
            <CiCircleList />
            <p>Dashboard</p>
          </Link>
          <Link to="/">
            <MdOutlinePlaylistAdd />
            <p>Create ToDo</p>
          </Link>
          <Link to="/">
            <IoStatsChartOutline />
            <p>Stats</p>
          </Link>
          <Link to="/">
            <ImProfile />
            <p>Profile</p>
          </Link>
        </li>
      </ul>
    </Wrapper>
  );
};

export default Sidebar;
