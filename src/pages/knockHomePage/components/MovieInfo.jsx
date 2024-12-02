import {
  ContentsTitle,
  TextInfoContainer,
  AboutContainer,
} from "../ContentsInfo.styled";

const Movie = ({ contentsInfo }) => {
  return (
    <TextInfoContainer>
      <ContentsTitle>{contentsInfo.title}</ContentsTitle>
      <AboutContainer>
        <h6>장르 : {contentsInfo.genre}</h6>
        <h6>감독 : {contentsInfo.director}</h6>
        <h6>출연진 : {contentsInfo.actor}</h6>
      </AboutContainer>
    </TextInfoContainer>
  );
};
export default Movie;
