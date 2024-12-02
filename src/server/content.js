import axiosInstance from "./axiosInstance";
import { handleAddContentError } from "./error";

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

//타입별 컨텐츠 조회
export const getContentsList = async (itemType, homeId) => {
  const params = {
    page: 0,
    size: 40,
  };
  try {
    const response = await axiosInstance.get(
      `/contents/${itemType}/${homeId}/list`,
      {
        params,
      }
    );
    return response.data.data.content;
  } catch (error) {
    console.error(`${itemType} 리스트 조회 중 오류 발생:`, error);
    throw error;
  }
};

//컨텐츠 등록
export const addContents = async (itemType, data) => {
  switch (itemType) {
    case "book":
      return await addBook(data);
    case "movie":
      return await addMovie(data);
    case "music":
      return await addMusic(data);
    default:
      throw new Error(`카테고리 오류: ${itemType}`);
  }
};

//음악 등록
const addMusic = async (data) => {
  try {
    await axiosInstance.post(`/music`, data);
  } catch (error) {
    handleAddContentError(error);
    console.error("음악 등록 중 오류 발생:", error);
    throw error;
  }
};

//책 등록
const addBook = async (data) => {
  try {
    await axiosInstance.post(`/book`, data);
  } catch (error) {
    handleAddContentError(error);
    console.error("책 등록 중 오류 발생:", error);
    throw error;
  }
};

//영화 등록
const addMovie = async (apiId) => {
  try {
    await axiosInstance.post(`/movie/${apiId}`);
  } catch (error) {
    handleAddContentError(error);
    console.error("영화 등록 중 오류 발생:", error);
    throw error;
  }
};

//컨텐츠 삭제
export const deleteContents = async (contentsId) => {
  try {
    const response = await axiosInstance.delete(`/contents/${contentsId}`);
    return response.data.data;
  } catch (error) {
    console.error("컨텐츠 삭제 중 오류 발생:", error);
    throw error;
  }
};

//컨텐츠 리뷰 조회
export const getReview = async (contentId) => {
  try {
    const response = await axiosInstance.get(`/contents/${contentId}/review`);
    return response.data.data;
  } catch (error) {
    console.error("컨텐츠 리뷰 조회 중 오류 발생:", error);
    throw error;
  }
};

//컨텐츠 리뷰 저장
export const saveReview = async (contentId, data) => {
  try {
    await axiosInstance.post(`/contents/${contentId}/review`, data);
  } catch (error) {
    console.error("컨텐츠 리뷰 등록 중 오류 발생:", error);
    throw error;
  }
};

//컨텐츠 리뷰 삭제
export const deleteReview = async (contentId) => {
  try {
    await axiosInstance.delete(`/contents/${contentId}/review`);
  } catch (error) {
    console.error("컨텐츠 리뷰 삭제 중 오류 발생:", error);
    throw error;
  }
};
