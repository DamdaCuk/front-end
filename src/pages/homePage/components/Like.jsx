import styled from "styled-components";
import { useState, useEffect } from "react";
import FillHeart from "../assets/img/fillHeart.png";
import Heart from "../assets/img/heart.png";
import { getLikeState, addLike, deleteLike } from "../../../server/like";

const LikeContainer = styled.div`
  width: 50px;
  height: 50px;
  position: fixed;
  right: 50px;
  bottom: 100px;
  cursor: pointer;
  & img {
    object-fit: cover;
  }
`;

const Like = ({ homeId }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (!isLiked) {
      clickLike();
    } else unclickLike();
  };

  const clickLike = async () => {
    try {
      await addLike(homeId);
      setIsLiked(true);
    } catch (error) {
      console.error("좋아요 클릭 중 오류 발생:", error);
    }
  };

  const unclickLike = async () => {
    try {
      await deleteLike(homeId);
      setIsLiked(false);
    } catch (error) {
      console.error("좋아요 취소 중 오류 발생:", error);
    }
  };

  useEffect(() => {
    const fetchLikeState = async () => {
      try {
        const result = await getLikeState(homeId);
        setIsLiked(result);
      } catch (error) {
        console.error("포스터 이미지 가져오는 중 오류 발생:", error);
      }
    };
    fetchLikeState();
  }, [homeId]);

  return (
    <LikeContainer>
      <img
        src={isLiked ? FillHeart : Heart}
        alt="좋아요 하트 이미지"
        onClick={handleLike}
      />
    </LikeContainer>
  );
};

export default Like;
