import axiosInstance from "./axiosInstance";

//포스터 조회
export const getPosterList = async (homeId) => {
  const params = {
    page: 0,
    size: 12,
  };
  try {
    const response = await axiosInstance.get(`/contents/movie/${homeId}/list`, {
      params,
    });
    const posters = response.data.data.content.slice(0, 3);

    const posterList = Array.from(
      { length: 3 },
      (_, index) => posters[index] || null
    );
    return posterList;
  } catch (error) {
    console.error("포스터 목록 조회 중 오류 발생:", error);
    throw error;
  }
};
