import { useState, useEffect } from "react";
import {
  StyledContent,
  ImagePlaceholder,
  TextContent,
  EditButton,
  ReviewText,
  ContentInfoContainer,
  ContentTitle,
  DeleteButton,
  ButtonContainer,
} from "../assets/styles/Review.styled";
import { Modal, Rate } from "antd";
import { getReview, saveReview, deleteReview } from "../../../server/content";
import { MOVIE_API_URL } from "../../../config";

const Review = ({ category, content, isModalOpen, setIsModalOpen, isMine }) => {
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const ratingMapping = ["ZERO", "ONE", "TWO", "THREE", "FOUR", "FIVE"];

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const result = await getReview(content.contentId);
        const mappedRating = result.rating
          ? ratingMapping.indexOf(result.rating.toUpperCase())
          : 0;
        setReviewText(result.reviewText ?? "");
        setRating(mappedRating);
      } catch (error) {
        console.error("컨텐츠 리뷰 불러오는 중 오류 발생:", error);
      }
    };

    if (isModalOpen) {
      fetchReview();
    }
  }, [isModalOpen, content.contentId]);

  const handleSave = async () => {
    const answer = confirm("감상평을 저장하시겠습니까?");
    if (answer) {
      const reviewData = {
        review: reviewText || "",
        rating: rating || 0,
      };
      try {
        await saveReview(content.contentId, reviewData);
        setIsModalOpen(false);
      } catch (error) {
        console.error("컨텐츠 리뷰 저장 중 오류 발생:", error);
      }
    }
  };

  const handleCancel = () => {
    if (!isMine) return setIsModalOpen(false);
    confirm("감상평을 닫으시겠습니까?") && setIsModalOpen(false);
  };

  const handleDelete = async () => {
    const answer = confirm("감상평을 삭제하시겠습니까?");
    if (answer) {
      try {
        await deleteReview(content.contentId);
        setIsModalOpen(false);
      } catch (error) {
        console.error("컨텐츠 리뷰 삭제 중 오류 발생:", error);
      }
    }
  };

  return (
    <Modal
      title={null}
      open={isModalOpen}
      onOk={handleSave}
      onCancel={handleCancel}
      footer={null}
      width={1000}
      styles={{
        body: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "500px",
          overflowY: "auto",
        },
      }}
    >
      <StyledContent>
        <ContentInfoContainer>
          <ContentTitle>{content.itemTitle}</ContentTitle>
          <ImagePlaceholder
            src={
              category === "movie"
                ? `${MOVIE_API_URL + content.itemImg}`
                : content.itemImg
            }
          />
        </ContentInfoContainer>
        <TextContent>
          {isMine && (
            <ButtonContainer>
              <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
              <EditButton onClick={handleSave}>Save</EditButton>
            </ButtonContainer>
          )}
          <Rate
            value={rating}
            onChange={(value) => isMine && setRating(value)}
          />
          <ReviewText
            rows={4}
            value={reviewText}
            onChange={(e) => isMine && setReviewText(e.target.value)}
            style={{
              width: "542px",
              height: "230px",
              resize: "none",
              borderRadius: "0px",
              background: "#FCE7E2",
            }}
            disabled={!isMine}
          />
        </TextContent>
      </StyledContent>
    </Modal>
  );
};

export default Review;
