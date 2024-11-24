import { Outlet, useLocation } from "react-router-dom";
import { Header } from "./components/Header";

export function OutletContainer() {
  const location = useLocation();
  const showHeader = location.pathname !== "/login";

  return (
    <div>
      {showHeader && <Header />}
      <Outlet />
    </div>
  );
}
