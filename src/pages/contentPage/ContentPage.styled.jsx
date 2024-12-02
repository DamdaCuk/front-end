import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
  height: auto;
`;

export const EditButton = styled.button`
  width: 103px;
  height: 35px;
  background: #ac6f63;
  color: white;
  font-size: 20px;
  font-weight: 500;
  border-radius: 10px;
  position: fixed;
  top: 120px;
  right: 50px;
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 100px 0;
`;

export const GridContainer = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const RowContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 80px;
  padding-bottom: 20px;
  border-bottom: 1px solid #6c6c6c;
`;
