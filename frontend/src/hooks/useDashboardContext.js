import { DashboardContext } from "../context/DashboardContext.jsx";
import { useContext } from "react";

export const useDashboardContext = () => {
  const context = useContext(DashboardContext);

  if (!context) {
    throw Error(
      "useDashboardContext must be used inside a DashboardContextProvider"
    );
  }

  return context;
};
