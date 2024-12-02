import DoorImg from "../assets/img/Door.png";
import Guestbook from "../assets/img/guestbook.png";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const DoorContainer = styled.div`
  width: 300px;
  height: 512px;
  background: url(${DoorImg}) no-repeat center center;
  background-size: cover;
  cursor: pointer;
  position: fixed;
  bottom: 210px;
  right: 100px;
  &:hover {
    transform: scale(1.02);
  }
`;

const GuestbookContainer = styled.img`
  position: absolute;
  top: 43px;
  left: 55px;
  z-index: 2;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;

const Door = ({ homeId }) => {
  const navigate = useNavigate();

  const toSearchHome = () => {
    navigate("/search/home");
  };

  const toGuestbook = (e) => {
    e.stopPropagation(); // 문 클릭시 이벤트 막기
    navigate(`/guestbook/${homeId}`);
  };

  return (
    <DoorContainer onClick={toSearchHome}>
      <GuestbookContainer
        src={Guestbook}
        alt="방명록 이미지"
        onClick={toGuestbook}
      />
    </DoorContainer>
  );
};

export default Door;
