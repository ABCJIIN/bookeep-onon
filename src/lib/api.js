import axiosInstance from "./axiosInstance";

export const getBestseller = () => axiosInstance.get("/Bestseller");

export const getItemNewAll = () => axiosInstance.get("/ItemNewAll");

export const getItemNewSpecial = () => axiosInstance.get("/ItemNewSpecial");
