import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://studywithbuddy.onrender.com/api/",
  withCredentials: true,
});

export default newRequest;
