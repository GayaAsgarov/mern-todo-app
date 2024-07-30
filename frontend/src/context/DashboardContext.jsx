import { createContext, useState } from "react";

export const DashboardContext = createContext();

// eslint-disable-next-line react/prop-types
export const DashboardContextProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => setShowSidebar(!showSidebar);
  return (
    <DashboardContext.Provider value={{ showSidebar, toggleSidebar }}>
      {children}
    </DashboardContext.Provider>
  );
};
