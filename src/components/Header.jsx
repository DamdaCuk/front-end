import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import Title from "../assets/damda_title.png";
import Exit from "../assets/Log out.png";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 100px;
  padding: 20px 50px;
  border-bottom: 1px solid #6c6c6c;
`;

const HeaderImg = styled.img`
  cursor: pointer;
`;

export function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const goToHome = () => {
    navigate("/");
  };

  return (
    <HeaderContainer>
      <HeaderImg src={Title} alt="담다 서비스 제목" onClick={goToHome} />
      {location.pathname !== "/" && (
        <HeaderImg src={Exit} alt="홈 돌아가기 아이콘" onClick={goToHome} />
      )}
    </HeaderContainer>
  );
}
