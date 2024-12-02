import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;
`;

export const SearchBarContainer = styled.div`
  max-width: 1500px;
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const SearchBar = styled.input`
  width: 1111px;
  height: 68px;
  border: 2px solid #ddd;
  border-radius: 30px;
  font-size: 17px;
  padding: 0 20px;

  &:focus {
    outline: none;
  }
`;

export const SearchButton = styled.button`
  width: 130px;
  height: 68px;
  background: #bbd6be;
  border-radius: 5px;
  font-size: 17px;
`;

export const SearchContentsContainer = styled.div`
  max-width: 1500px;
  height: 50vh;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
`;

export const Box = styled.div`
  width: 229.33px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  justify-content: center;
  & .add-content {
    width: 100px;
    height: 100px;
  }
`;

export const ImgContainer = styled.div`
  width: 229.33px;
  height: 247px;
  & img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  cursor: pointer;
`;

export const TitleContainer = styled.div`
  width: 100%;
  height: 70px;
  text-align: center;
  & p {
    cursor: pointer;
  }
`;
