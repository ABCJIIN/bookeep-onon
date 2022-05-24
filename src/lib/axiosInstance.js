import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_API_HOST}?ttbkey=[${process.env.REACT_APP_API_KEY}]&QueryType=`,
  params: {
    api_key: process.env.REACT_APP_API_KEY,
  },
});

export default axiosInstance;
