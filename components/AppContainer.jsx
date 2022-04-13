import { useEffect } from "react";

import appHeight from "../lib/appHeight";

const AppContainer = ({ children }) => {
  useEffect(() => {
    window.addEventListener("resize", appHeight);
    appHeight();
    return () => window.removeEventListener("resize", appHeight);
  }, []);
  return <>{children}</>;
};

export default AppContainer;
