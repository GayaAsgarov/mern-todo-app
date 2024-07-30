import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/Header";
import { FaBars } from "react-icons/fa6";
import { useDashboardContext } from "../hooks/useDashboardContext";

const Header = () => {
    const {toggleSidebar} = useDashboardContext();
  return (
    <Wrapper>
      <div className="header-left">
        <Link to="/dashboard">
          <h1>ToDo Buddy</h1>
        </Link>
        <button onClick={toggleSidebar}><FaBars /></button>
      </div>
      <div className="header-info">
        <p>User Name</p>
      </div>
    </Wrapper>
  );
};

export default Header;
