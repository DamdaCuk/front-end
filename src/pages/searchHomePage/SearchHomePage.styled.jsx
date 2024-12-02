import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0;
  gap: 50px;
`;

export const KnockMessage = styled.h3`
  font-size: 25px;
`;

export const SearchResult = styled.div`
  width: 1200px;
  height: 100%;
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
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

export const ContentBox = styled.div`
  width: 229.33px;
  height: 247px;
  cursor: pointer;
  & img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
