import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "656245601863200c5e8a5ee7adac095e",
    language: "ko-KR",
  },
});

export default instance;
