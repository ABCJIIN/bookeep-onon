import axiosInstance from "./axiosInstance";

export const getBestseller = () => axiosInstance.get("/allbooks/Bestseller");

export const getItemNewAll = () => axiosInstance.get("/allbooks/ItemNewAll");

export const getItemNewSpecial = () =>
  axiosInstance.get("/allbooks/ItemNewSpecial");
