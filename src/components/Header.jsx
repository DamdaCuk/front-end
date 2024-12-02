import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import Title from "../assets/damda_title.png";
import Exit from "../assets/Log out.png";
import { USER_HOME_ID } from "../config";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 100px;
  padding: 20px 50px;
  border-bottom: 1px solid #6c6c6c;
  background-color: ${(props) => (props.$isHome ? "#DED4D0" : "white")};
  border-bottom: ${(props) => (props.$isHome ? "none" : "1px solid #6c6c6c")};
`;

const HeaderImg = styled.img`
  cursor: pointer;
`;

export function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const isHome = /^\/(\d+)?$/.test(location.pathname);
  const homeIdInPath = location.pathname.match(/^\/(\d+)/)?.[1];
  const isMine = homeIdInPath && Number(homeIdInPath) === USER_HOME_ID;

  const goToHome = () => {
    const homeId = USER_HOME_ID;
    navigate(`/${homeId}`);
  };

  return (
    <HeaderContainer $isHome={isHome}>
      <HeaderImg src={Title} alt="담다 서비스 제목" onClick={goToHome} />
      {!isMine && (
        <HeaderImg src={Exit} alt="홈 돌아가기 아이콘" onClick={goToHome} />
      )}
    </HeaderContainer>
  );
}
