// 컨텐츠 추가 중 에러 발생
export const handleAddContentError = (error) => {
  if (error.response) {
    const message = error.response.data.message;
    alert(message);
  }
};

// 방명록 삭제 중 에러 발생
export const handleDeleteCommentError = (error) => {
  if (error.response) {
    const message = error.response.data.message;
    alert(message);
  }
};
