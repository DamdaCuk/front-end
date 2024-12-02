import styled from "styled-components";

export const PageContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const CenterContainer = styled.div`
  width: 90%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  img:first-child {
    max-width: 50%;
    max-height: 10vh;
    height: auto;
  }

  img:last-of-type {
    max-width: 70%;
    max-height: 40vh;
    height: auto;
  }
`;

export const LoginContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const LoginButton = styled.button`
  width: 300px;
  height: 50px;
  border-radius: 1rem;

  display: flex;
  align-items: center;
  position: relative;

  font-weight: 600;
  background-color: #19ce60;

  & img {
    position: absolute;
    left: 20px;
  }
  & span {
    margin: 0 auto;
    font-size: 15px;
  }
`;

export const LoginPassButton = styled.button`
  font-weight: 500;
  font-size: 13px;
  color: #7f7f7f;
`;
