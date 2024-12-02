import { useNavigate } from "react-router-dom";
import {
  PageContainer,
  CenterContainer,
  LoginContainer,
  LoginButton,
  LoginPassButton,
} from "./LoginPage.styled";
import TitleLogo from "./assets/title.png";
import DamdaLogo from "./assets/damda.png";
import NaverLogo from "./assets/naver.png";
import { USER_HOME_ID } from "../../config";

const LoginPage = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    const homeId = USER_HOME_ID;
    navigate(`/${homeId}`);
  };

  const goToSearchHome = () => {
    navigate(`/search/home`);
  };

  return (
    <PageContainer>
      <CenterContainer>
        <img src={TitleLogo} alt="담다 텍스트 로고" />
        <img src={DamdaLogo} alt="담다 로고" />
        <LoginContainer>
          <LoginButton onClick={goToHome}>
            <img src={NaverLogo} alt="네이버 로고" />
            <span>네이버로 시작하기</span>
          </LoginButton>
          <LoginPassButton onClick={goToSearchHome}>
            로그인 없이 시작하기
          </LoginPassButton>
        </LoginContainer>
      </CenterContainer>
    </PageContainer>
  );
};

export default LoginPage;
