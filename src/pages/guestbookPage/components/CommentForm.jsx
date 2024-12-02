import { Input, Button } from "antd";
import { useState } from "react";
import { addComment, getGuestBook } from "../../../server/guestbook";

const CommentForm = ({ homeId, setData }) => {
  const [newComment, setNewComment] = useState("");

  const handleAddComment = async () => {
    if (newComment.trim() !== "") {
      const commentData = {
        comment: newComment,
        homeId: homeId,
      };

      try {
        await addComment(commentData);
        console.log("등록 성공");
        const updatedComments = await getGuestBook(homeId);
        setData(updatedComments);
        setNewComment("");
      } catch (error) {
        console.log("방명록 등록 중 에러 발생:", error);
      }
    }
  };

  return (
    <div style={{ display: "flex", gap: "18px" }}>
      <Input
        placeholder="방명록을 작성하세요"
        style={{ flex: 1 }}
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />
      <Button
        type="primary"
        style={{ width: "100px", background: "#FCE4DE", color: "black" }}
        onClick={handleAddComment}
      >
        작성
      </Button>
    </div>
  );
};

export default CommentForm;
