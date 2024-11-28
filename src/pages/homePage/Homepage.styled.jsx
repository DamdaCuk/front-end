import styled from "styled-components";
import Background from "./assets/img/background.png";

export const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  background: url(${Background}) no-repeat center center;
  background-size: cover;
`;

export const TurntableContainer = styled.img`
  position: fixed;
  bottom: 50px;
  right: 380px;
  z-index: 10;
  cursor: pointer;
  &:hover {
    transform: scale(1.03);
  }
`;

export const BookcaseContainer = styled.img`
  position: fixed;
  top: 250px;
  left: 100px;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;
