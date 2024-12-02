import { useLocation } from "react-router-dom";
import Book from "./components/BookInfo";
import Music from "./components/MusicInfo";
import Movie from "./components/MovieInfo";
import styled from "styled-components";
import HomeList from "./components/HomeList";
import BackButton from "../../components/BackButton";

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const InfoContainer = styled.div`
  width: 400px;
  height: 700px;
  border: 3px solid #819a85;
  border-radius: 16px;
  padding: 20px 50px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ImgContainer = styled.div`
  width: 100%;
  height: 400px;
  & img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const TextContainer = styled.div``;

const HomeContainer = styled.div`
  width: 900px;
  height: 700px;
  border: 3px solid #819a85;
  border-radius: 16px;
`;

const ResultContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const KnockHomePage = () => {
  const location = useLocation();
  const { contentsInfo, category } = location.state;

  return (
    <PageContainer>
      <BackButton />
      {contentsInfo ? (
        <ResultContainer>
          <InfoContainer>
            <ImgContainer>
              <img src={contentsInfo.image} />
            </ImgContainer>
            <TextContainer>
              {category === "movie" && <Movie contentsInfo={contentsInfo} />}
              {category === "book" && <Book contentsInfo={contentsInfo} />}
              {category === "music" && <Music contentsInfo={contentsInfo} />}
            </TextContainer>
          </InfoContainer>
          <HomeContainer>
            <HomeList contentsId={contentsInfo.itemId} category={category} />
          </HomeContainer>
        </ResultContainer>
      ) : (
        <p>컨텐츠 정보가 없습니다.</p>
      )}
    </PageContainer>
  );
};

export default KnockHomePage;
