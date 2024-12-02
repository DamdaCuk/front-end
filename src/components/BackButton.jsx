import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";

const BackContainer = styled.div`
  position: fixed;
  top: 150px;
  left: 100px;
  cursor: pointer;
  font-size: 30px;
  font-weight: 600;
`;

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <BackContainer onClick={() => navigate(-1)}>
      <ArrowLeftOutlined />
    </BackContainer>
  );
};

export default BackButton;
