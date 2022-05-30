import axios from "axios";

export const Kakao = axios.create({
  baseURL: "https://dapi.kakao.com",
  headers: {
    Authorization: `KakaoAK 1fee13fc963596da0c98a270a9d6751b`,
  },
});

export const bookSearch = (params) => {
  return Kakao.get("/v3/search/book?target=title", { params });
};

export const book = () => {
  return Kakao.get("/v3/search/book?target=title");
};
