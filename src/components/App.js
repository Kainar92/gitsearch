import React from "react";
import github from "../api/github";
import WellComePage from "../components/WellcomePage";
import Spinner from "./Spinner";
import SearchBar from "./SearchBar";
import UserList from "./UserList";
import "./index.css";

export default class App extends React.Component {
  state = {
    usersList: [],
    totalUsersCount: 0,
    isloading: false,
    skill: "",
    location: "",
    currentPage: 1
  };

  //Fetching data and cahing it on the localStorage main Function
  onSearchSumbit = async (skill, location, currentPage = 1) => {
    // Checking if data already exists on the localStorage or not
    if (
      !localStorage.getItem("pageUsersList") ||
      !JSON.parse(localStorage.getItem("pageUsersList"))[
        `${currentPage}-${skill}-${location}-${this.state.totalUsersCount}`
      ]
    ) {
      // if there is no data on localStorage fetch it by using axios
      this.setState({ isloading: true });
      const responce = await github.get(
        `/search/users?&q=location:${location}+language:${skill}&page=${currentPage}`
      );
      const totalUsersCount = responce.data.total_count;
      var usersList = await Promise.all(
        responce.data.items.map(async profile => {
          return await github.get(profile.url).then(responce => {
            return responce.data;
          });
        })
      );
      this.setState({
        usersList,
        totalUsersCount,
        skill,
        location,
        currentPage,
        isloading: false
      });
      //--------------Each page Users List Caching on LocalStorage-------------
      var pageUsersList =
        JSON.parse(localStorage.getItem("pageUsersList")) || {};
      pageUsersList[
        `${this.state.currentPage}-${this.state.skill}-${this.state.location}-${
          this.state.totalUsersCount
        }`
      ] = this.state.usersList;
      localStorage.setItem("pageUsersList", JSON.stringify(pageUsersList));
      //---------------------------------------------------------
      //----------Caching total number of users after first calculating it-------
      localStorage.setItem(
        "totalUsersCount",
        JSON.stringify(this.state.totalUsersCount)
      );
      //----------------------------------------------------------
    } else {
      // if there is data already on localStorage update the state to that data
      const cache = JSON.parse(localStorage.pageUsersList);
      this.setState({
        usersList:
          cache[
            `${currentPage}-${skill}-${location}-${this.state.totalUsersCount}`
          ],
        totalUsersCount: JSON.parse(localStorage.totalUsersCount)
      });
    }
  };

  render() {
    return (
      <div className="main-wrapper">
        {this.state.totalUsersCount === 0 && this.state.isloading === false ? (
          <WellComePage />
        ) : null}
        {this.state.isloading ? <Spinner /> : null}
        <UserList
          usersList={this.state.usersList}
          totalUsersCount={this.state.totalUsersCount}
        />
        <SearchBar
          usersList={this.state.usersList}
          onFormSubmit={this.onSearchSumbit}
          totalUsersCount={this.state.totalUsersCount}
        />
      </div>
    );
  }
}
