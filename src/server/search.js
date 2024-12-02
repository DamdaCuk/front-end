import axiosInstance from "./axiosInstance";
import { MOVIE_API_URL } from "../config";

//컨텐츠 조회
export const searchContents = async (itemType, inputData) => {
  switch (itemType) {
    case "book":
      return await searchBook(inputData);
    case "movie":
      return await searchMovie(inputData);
    case "music":
      return await searchMusic(inputData);
    default:
      throw new Error(`카테고리 오류: ${itemType}`);
  }
};

//음악 검색
export const searchMusic = async (inputData) => {
  try {
    const musicData = {
      keyword: inputData.title,
      type: "song",
    };
    const response = await axiosInstance.post(`/music/search`, musicData);

    const transformedData = response.data.data.map((item) => ({
      ...item,
      image: item.albumCover,
    }));

    return transformedData;
  } catch (error) {
    console.error("음악 검색 중 오류 발생:", error);
    throw error;
  }
};

//책 검색
export const searchBook = async (inputData) => {
  try {
    const response = await axiosInstance.get(`/book/search`, {
      params: inputData,
    });
    return response.data.data;
  } catch (error) {
    console.error("책 검색 중 오류 발생:", error);
    throw error;
  }
};

//영화 검색
export const searchMovie = async (inputData) => {
  try {
    const movieData = {
      title: inputData.title,
      page: inputData.page,
    };

    const response = await axiosInstance.get(`/movie/search`, {
      params: movieData,
    });

    const transformedData = response.data.data.map((item) => ({
      ...item,
      image: `${MOVIE_API_URL}${item.posterPath}`,
    }));

    return transformedData;
  } catch (error) {
    console.error("영화 검색 중 오류 발생:", error);
    throw error;
  }
};
