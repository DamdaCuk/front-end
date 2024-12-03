import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Icons from "./assets/damda.png";
import { USER_HOME_ID } from "../../config";
import { registerHome } from "../../server/register";

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const InputBox = styled.input`
  width: 350px;
  height: 61px;
  background: #c4dbc5;
  border: none;
  border-radius: 20px;
  outline: none;
  padding: 0 20px;
  text-align: center;
  font-size: 18px;
`;

const RegisterHomePage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const handleDone = async (name) => {
    if (name.trim() !== "") {
      try {
        await registerHome(name.trim());
        console.log(name);
        navigate(`/${USER_HOME_ID}`);
      } catch (error) {
        console.error("홈 등록 중 에러 발생:", error);
        alert("홈 등록 중 오류가 발생했습니다. 다시 시도해주세요.");
      }
    } else {
      alert("공백 제외 입력하세요");
    }
  };
  return (
    <PageContainer>
      <img src={Icons} alt="제목 캐릭터 아이콘" />
      <p>당신의 취향을 담을 공간에 이름을 지어주세요</p>
      <InputBox
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => handleDone(name)} style={{ color: "#caa38e" }}>
        시작하기
      </button>
    </PageContainer>
  );
};

export default RegisterHomePage;
