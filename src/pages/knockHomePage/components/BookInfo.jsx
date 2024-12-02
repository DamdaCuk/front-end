import {
  AboutContainer,
  ContentsTitle,
  TextInfoContainer,
} from "../ContentsInfo.styled";

const Book = ({ contentsInfo }) => {
  return (
    <TextInfoContainer>
      <AboutContainer>
        <ContentsTitle>{contentsInfo.title}</ContentsTitle>
        <h6>작가 : {contentsInfo.author}</h6>
        <h6>출판사 : {contentsInfo.publisher}</h6>
      </AboutContainer>
    </TextInfoContainer>
  );
};
export default Book;
