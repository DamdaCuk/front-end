import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MessageOutlined } from "@ant-design/icons";
import Like from "../homePage/components/Like";
import { USER_HOME_ID } from "../../config";
import CommentForm from "./components/CommentForm";
import GuestList from "./components/GuestList";
import {
  PageContainer,
  ContentContainer,
  CommentCountContainer,
} from "./Guestbook.styled";
import { getGuestBook, deleteComment } from "../../server/guestbook";
import BackButton from "../../components/BackButton";

const GuestbookPage = () => {
  const { homeId } = useParams();
  const isMine = Number(homeId) === USER_HOME_ID;
  const [comment, setComment] = useState([]);

  useEffect(() => {
    const fetchGuestBook = async () => {
      try {
        const response = await getGuestBook(homeId);
        console.log(response);
        setComment(response);
      } catch (error) {
        console.error("방명록 조회 중 에러 발생:", error);
      }
    };

    fetchGuestBook();
  }, [homeId]);

  const handleDelete = async (commentId) => {
    try {
      await deleteComment(commentId);
      setComment((prevComments) =>
        prevComments.filter((c) => c.commentId !== commentId)
      );
    } catch (error) {
      console.error("방명록 삭제 중 에러 발생:", error);
    }
  };

  return (
    <PageContainer>
      <BackButton />
      <ContentContainer>
        <CommentCountContainer>
          <MessageOutlined />
          {comment.length}
        </CommentCountContainer>
        {!isMine && (
          <div className="guest-list-form">
            <CommentForm homeId={homeId} setData={setComment} />
            <Like homeId={homeId} />
          </div>
        )}
        <div className="guest-list-wrapper">
          <GuestList data={comment} handleDelete={handleDelete} />
        </div>
      </ContentContainer>
    </PageContainer>
  );
};

export default GuestbookPage;
