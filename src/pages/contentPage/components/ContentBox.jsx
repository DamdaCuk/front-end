import styled from "styled-components";
import Plus from "../assets/img/plus.png";
import { MOVIE_API_URL } from "../../../config";
import DeleteIcon from "../assets/img/delete.png";
import { deleteContents } from "../../../server/content";
import Review from "./Review";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BoxContainer = styled.div`
  width: 229.33px;
  height: 247px;
  position: relative;
  background: ${(props) =>
    props.$isFirst && props.$isMine ? "#f5f5f5" : "transparent"};
`;

const Box = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  & img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  & .add-content {
    width: 100px;
    height: 100px;
  }
`;

const Delete = styled.img`
  position: absolute;
  top: -15px;
  right: 3px;
  cursor: pointer;
`;

export default function ContentBox({
  category,
  content,
  index,
  isEdit,
  isMine,
  onDelete,
}) {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showReview = () => {
    setIsModalOpen(true);
  };

  const handleDelete = async () => {
    const answer = confirm(`${content.itemTitle} 삭제하시겠습니까?`);
    if (answer) {
      try {
        await deleteContents(content.contentId);

        onDelete(content.contentId);
      } catch (error) {
        console.error("컨텐츠 삭제 중 오류 발생:", error);
      }
    }
  };

  const handleAdd = (isFirst, isMine) => {
    if (isFirst && isMine) {
      navigate(`/search/contents/${category}`);
    }
  };

  return (
    <BoxContainer
      $isFirst={index === 0}
      $isMine={isMine}
      onClick={() => handleAdd(index === 0, isMine)}
    >
      <Box>
        {isMine && index === 0 ? (
          <img src={Plus} alt="더하기 아이콘" className="add-content" />
        ) : (
          <img
            src={
              category === "movie"
                ? `${MOVIE_API_URL + content.itemImg}`
                : content.itemImg
            }
            alt={`${index}번째 이미지`}
            onClick={() => showReview()}
          />
        )}
      </Box>
      {isEdit && index !== 0 && (
        <Delete src={DeleteIcon} alt="삭제 아이콘" onClick={handleDelete} />
      )}
      {isModalOpen && (
        <Review
          category={category}
          content={content}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          isMine={isMine}
        />
      )}
    </BoxContainer>
  );
}
