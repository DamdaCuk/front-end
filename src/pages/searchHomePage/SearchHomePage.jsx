import {
  PageContainer,
  KnockMessage,
  SearchResult,
  ContentContainer,
  GridContainer,
  RowContainer,
  ContentBox,
} from "./SearchHomePage.styled";
import SearchBar from "./componetns/SearchBar";
import { useState, useEffect } from "react";
import { searchHomeContents } from "../../server/search";
import { useNavigate } from "react-router-dom";
import BackButton from "../../components/BackButton";

const SearchHomePage = () => {
  const [searchState, setSearchState] = useState(false);
  const [contentsList, setContentsList] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("");
  const [rows, setRows] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const generateRows = (contents) => {
      const result = [];
      for (let i = 0; i < contents.length; i += 4) {
        result.push(contents.slice(i, i + 4));
      }
      return result;
    };
    setRows(generateRows(contentsList));
  }, [contentsList]);

  const handleSearch = async (category, keyword) => {
    console.log(category, keyword);
    try {
      const response = await searchHomeContents(category, keyword);
      setContentsList(response);
      setCurrentCategory(category);
      console.log(response);
    } catch (error) {
      console.log("홈 내 컨텐츠 불러오는 중 오류 발생:", error);
    }
    setSearchState(true);
  };

  const handleNavigate = (item) => {
    navigate("/search/home/result", {
      state: { contentsInfo: item, category: currentCategory },
    });
  };

  return (
    <PageContainer>
      <BackButton />
      <SearchBar onSearch={handleSearch}></SearchBar>
      {!searchState && (
        <KnockMessage>
          좋아하는 콘텐츠를 검색하고, 다른 사람의 홈에 노크해보세요!
        </KnockMessage>
      )}
      <SearchResult>
        <ContentContainer>
          {searchState && contentsList.length === 0 ? (
            <p>검색된 컨텐츠가 없습니다.</p>
          ) : (
            <GridContainer>
              {rows.map((rowContent, rowIndex) => (
                <RowContainer key={rowIndex}>
                  {rowContent.map((content, index) => (
                    <ContentBox
                      key={index}
                      content={content}
                      index={rowIndex * 4 + index}
                    >
                      <img
                        src={content.image}
                        alt="컨텐츠 이미지"
                        onClick={() => handleNavigate(content)}
                      />
                    </ContentBox>
                  ))}
                </RowContainer>
              ))}
            </GridContainer>
          )}
        </ContentContainer>
      </SearchResult>
    </PageContainer>
  );
};

export default SearchHomePage;
