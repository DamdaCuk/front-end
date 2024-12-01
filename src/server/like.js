import axiosInstance from "./axiosInstance";

//좋아요 조회
export const getLikeState = async (homeId) => {
  try {
    const response = await axiosInstance.post(`/guest-book/like`, {
      homeId: homeId,
    });
    return response.data.data;
  } catch (error) {
    console.error("좋아요 조회 중 오류 발생:", error);
    throw error;
  }
};

//좋아요 추가
export const addLike = async (homeId) => {
  try {
    const response = await axiosInstance.post(`/guest-book/like/add`, {
      homeId: homeId,
    });
    return response.data.data;
  } catch (error) {
    console.error("좋아요 추가 중 오류 발생:", error);
    throw error;
  }
};

//좋아요 삭제
export const deleteLike = async (homeId) => {
  try {
    const response = await axiosInstance.post(`/guest-book/like/delete`, {
      homeId: homeId,
    });
    return response.data.data;
  } catch (error) {
    console.error("좋아요 삭제 중 오류 발생:", error);
    throw error;
  }
};
