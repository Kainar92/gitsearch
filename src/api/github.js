import axios from "axios";

export default axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: "Bearer 4606f831260142f7e60cbf3a022c9c03f7c08752"
  },
  params: {
    per_page: 10
  }
});
