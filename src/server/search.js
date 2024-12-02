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

//홈 내 컨텐츠 검색
export const searchHomeContents = async (itemType, title) => {
  try {
    const response = await axiosInstance.get(`/${itemType}/list`, {
      params: {
        title: title,
        pageable: 0,
      },
    });

    let content = response.data.data.content;

    if (itemType === "movie") {
      content = transFormedMovie(content);
    } else if (itemType === "music") {
      content = transFormedMusic(content);
    } else if (itemType === "book") {
      content = transFormedBook(content);
    }
    return content;
  } catch (error) {
    console.error("홈 내 존재하는 컨텐츠 검색 중 오류 발생:", error);
    throw error;
  }
};

//영화 포스터 이미지 경로 변환, 아이템 아이디 키 값 추가
const transFormedMovie = (content) => {
  return content.map((item) => ({
    ...item,
    itemId: item.movieId,
    image: `${MOVIE_API_URL}${item.posterPath}`,
  }));
};

//음악 앨범 커버 이미지 키 값 변환, 아이템 아이디 키 값 추가
const transFormedMusic = (content) => {
  return content.map((item) => ({
    ...item,
    itemId: item.musicId,
    image: `${item.album_cover}`,
  }));
};

//책 아이템 아이디 키 값 추가
const transFormedBook = (content) => {
  return content.map((item) => ({
    ...item,
    itemId: item.bookId,
  }));
};

//홈 검색
export const searchHome = async (itemId, contentType) => {
  try {
    const response = await axiosInstance.get(`/home/search`, {
      params: {
        itemId: itemId,
        contentType: contentType.toUpperCase(),
        pageable: 0,
      },
    });
    return response.data.data.content;
  } catch (error) {
    console.error("홈 검색 중 오류 발생:", error);
    throw error;
  }
};
