import {
  PageContainer,
  SearchBarContainer,
  SearchBar,
  SearchButton,
  SearchContentsContainer,
  Box,
  ImgContainer,
  TitleContainer,
} from "./SearchContentsPage.styled";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { searchContents } from "../../server/search";
import { addContents } from "../../server/content";
import BackButton from "../../components/BackButton";

const SearchContentPage = () => {
  const [title, setTitle] = useState("");
  const { category } = useParams();
  const [inputData, setInputData] = useState({
    title: "",
    page: 1,
  });
  const [searchedContents, setSearchedContents] = useState([]);
  const [searchState, setSearchState] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSearch = async () => {
    setSearchState(true);
    setIsLoading(true);
    try {
      setInputData((prev) => ({ ...prev, title }));
      const result = await searchContents(category, { ...inputData, title });
      setSearchedContents(result);
      setIsLoading(false);
      console.log("searchContents 결과:", result);
    } catch (error) {
      console.error("검색 중 오류 발생:", error);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleAdd = async (item) => {
    if (!confirm(`나의 방에 ${item.title} 추가하시겠습니까?`)) return;
    try {
      const dataToAdd = category === "movie" ? item.apiId : item;
      await addContents(category, dataToAdd);
      navigate(-1);
    } catch (error) {
      console.error("추가 중 오류 발생:", error);
    }
  };

  return (
    <PageContainer>
      <BackButton />
      <SearchBarContainer>
        <SearchBar
          placeholder="제목을 입력하세요"
          onChange={(e) => setTitle(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <SearchButton onClick={handleSearch}>검색</SearchButton>
      </SearchBarContainer>
      <SearchContentsContainer>
        {isLoading ? (
          <p>검색 중입니다...</p>
        ) : searchState && searchedContents.length === 0 ? (
          <p>검색 결과가 없습니다</p>
        ) : (
          searchedContents.map((item, index) => (
            <Box key={index} onClick={() => handleAdd(item)}>
              <ImgContainer>
                <img src={item.image} alt="컨텐츠 이미지" />
              </ImgContainer>
              <TitleContainer>
                <p>{item.title}</p>
              </TitleContainer>
            </Box>
          ))
        )}
      </SearchContentsContainer>
    </PageContainer>
  );
};

export default SearchContentPage;
