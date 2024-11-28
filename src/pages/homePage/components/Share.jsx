import { useState } from "react";
import styled from "styled-components";
import ShareIcon from "../assets/img/share.png";
import { Modal } from "antd";

const ShareButton = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
  position: fixed;
  right: 40px;
  bottom: 20px;
`;

const CustomAlert = ({ visible, onClose, message }) => {
  return (
    <Modal open={visible} onCancel={onClose} footer={null}>
      <p>{message}</p>
    </Modal>
  );
};

const Share = () => {
  const [alertVisible, setAlertVisible] = useState(false);

  const copyToClipboard = () => {
    const currentURL = window.location.href;
    navigator.clipboard
      .writeText(currentURL)
      .then(() => {
        setAlertVisible(true);
      })
      .catch((err) => {
        console.error("클립보드 복사 실패:", err);
      });
  };

  return (
    <>
      <ShareButton
        src={ShareIcon}
        alt="공유 아이콘"
        onClick={copyToClipboard}
      />
      <CustomAlert
        visible={alertVisible}
        onClose={() => setAlertVisible(false)}
        message="홈 주소가 클립보드에 복사되었습니다!"
      />
    </>
  );
};

export default Share;
