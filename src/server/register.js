import axiosInstance from "./axiosInstance";

export const registerHome = async (homeName) => {
  try {
    await axiosInstance.post(`/home/create`, { homeName });
  } catch (error) {
    console.error("홈 등록 중 오류 발생:", error);
    throw error;
  }
};
