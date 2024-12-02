import {
  ContentsTitle,
  TextInfoContainer,
  AboutContainer,
} from "../ContentsInfo.styled";

const Music = ({ contentsInfo }) => {
  return (
    <TextInfoContainer>
      <ContentsTitle>{contentsInfo.title}</ContentsTitle>
      <AboutContainer>
        <h6>아티스트 : {contentsInfo.artist}</h6>
        <h6>앨범 : {contentsInfo.album}</h6>
      </AboutContainer>
    </TextInfoContainer>
  );
};
export default Music;
