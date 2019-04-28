// export const cacheRequest = (
//   skill,
//   location,
//   currentPage,
//   totalUsersCount,
//   usersList
// ) => {
//   const pageUsersList = JSON.parse(localStorage.getItem("pageUsersList")) || {};

//   pageUsersList[
//     `${skill}-${location}-${currentPage}-${totalUsersCount}`
//   ] = usersList;

//   localStorage.setItem("pageUsersList", JSON.stringify(pageUsersList));
//   localStorage.setItem("totalUsersCount", JSON.stringify(totalUsersCount));
//   localStorage.setItem("currentPage", JSON.stringify(currentPage));
// };
