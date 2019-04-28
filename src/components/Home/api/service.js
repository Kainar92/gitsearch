import axios from "axios";

export const githubApi = axios.create({
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

export const fetchRequest = async (skill, location, currentPage) => {
  const response = await githubApi.get(
    `/search/users?&q=location:${location}+language:${skill}&page=${currentPage}`
  );

  const totalUsersCount = await response.data.total_count;

  const usersList = await Promise.all(
    response.data.items.map(async profile => {
      return await githubApi.get(profile.url).then(response => {
        return response.data;
      });
    })
  );

  return {
    usersList,
    totalUsersCount
  };
};
