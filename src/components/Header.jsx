import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 50px;
`;

export function Header() {
  return (
    <HeaderContainer>
      <div>Damda</div>
      <p>나가기</p>
    </HeaderContainer>
  );
}
