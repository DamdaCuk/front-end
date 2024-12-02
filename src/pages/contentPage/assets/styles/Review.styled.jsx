import styled from "styled-components";
import { Button, Input } from "antd";

export const StyledContent = styled.div`
  display: flex;
  gap: 56px;
  justify-content: center;
  align-items: center;
`;

export const ImagePlaceholder = styled.img`
  width: 263px;
  height: 351px;
  object-fit: contain;
`;

export const TextContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 0 0 0;
`;

export const EditButton = styled(Button)`
  align-self: flex-end;
  background: #b08584;
  border-color: #b08584;
  color: white;
  width: 100px;

  &:hover {
    background: #a07372;
    border-color: #a07372;
  }
`;

export const DeleteButton = styled(Button)`
  align-self: flex-end;
  background: #ddd;
  border-color: #ddd;
  color: white;
  width: 100px;
`;

export const ReviewText = styled(Input.TextArea)`
  margin-top: 8px;
  resize: none;

  &:disabled {
    color: black;
  }
`;

export const ContentInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentTitle = styled.h6`
  font-weight: 700;
  font-size: 20px;
  padding-bottom: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
