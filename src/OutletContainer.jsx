import { Outlet, useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import styled from "styled-components";

const ViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

const OutletContent = styled.div`
  flex: 1;
  overflow: auto;
`;

export function OutletContainer() {
  const location = useLocation();
  const showHeader = location.pathname !== "/login";

  return (
    <ViewContainer>
      {showHeader && <Header />}
      <OutletContent>
        <Outlet />
      </OutletContent>
    </ViewContainer>
  );
}
