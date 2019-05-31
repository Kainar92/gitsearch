import React, { Component } from "react";
import { fetchRequest } from "../api/service";
import WellcomePage from "./components/WellcomePage";
import Spinner from "../Spinner";
import SearchBar from "./components/SearchBar";
import UsersList from "./components/UsersList";
import ScrollEventHandler from "./components/ScrollEventHandler";

import "./style.css";

class Home extends Component {
  state = {
    usersList: [],
    totalUsersCount: 0,
    isLoading: false,
    skill: "",
    location: "",
    currentPage: 1
  };

  handleSkillChange = skill => {
    this.setState({ skill });
    localStorage.setItem("skill", skill);
  };

  handleLocationChange = location => {
    this.setState({ location });
    localStorage.setItem("location", location);
  };

  handlePageChange = async pageNumber => {
    await this.setState({ currentPage: pageNumber });
    localStorage.setItem("currentPage", JSON.stringify(this.state.currentPage));

    this.fetchData();
  };

  handleSearchSubmit = async () => {
    await this.setState({ currentPage: 1 });

    this.fetchData();
  };

  fetchData = async () => {
    const { skill, location, currentPage, totalUsersCount } = this.state;

    const localPageUsersList = localStorage.getItem("pageUsersList");

    const key = `${skill}-${location}-${currentPage}-${totalUsersCount}`;

    if (!localPageUsersList || !JSON.parse(localPageUsersList)[key]) {
      this.setState({ isLoading: true });

      fetchRequest(skill, location, currentPage).then(response => {

        this.setState({
          usersList: response["usersList"],
          totalUsersCount: response["totalUsersCount"],
          isLoading: false
        });
        
      });
    } else {
      const cache = JSON.parse(localStorage.pageUsersList);

      this.setState({
        usersList: cache[key],
        totalUsersCount: JSON.parse(localStorage.totalUsersCount)
      });
    }
  };

  componentDidMount() {
    if (sessionStorage.getItem("isMountedFirstTime") === "true") {
      sessionStorage.setItem("isMountedFirstTime", "false");
      return;
    } else {
      this.setState(
        {
          skill: localStorage.skill,
          location: localStorage.location,
          currentPage: JSON.parse(localStorage.currentPage),
          totalUsersCount: JSON.parse(localStorage.totalUsersCount)
        },
        () => {
          this.fetchData().then(() => {
            if (localStorage.scrollPosition) {
              window.scrollTo(0, JSON.parse(localStorage.scrollPosition));
            }
          });
        }
      );
    }
  }

  render() {
    const { totalUsersCount, isLoading, usersList } = this.state;
    return (
      <div className="main-wrapper">
        {!totalUsersCount && !isLoading ? (
          <WellcomePage />
        ) : (
          <ScrollEventHandler />
        )}

        {isLoading ? (
          <Spinner />
        ) : (
          <UsersList usersList={usersList} totalUsersCount={totalUsersCount} />
        )}

        <SearchBar
          {...this.state}
          onSkillChange={this.handleSkillChange}
          onLocationChange={this.handleLocationChange}
          onPageChange={this.handlePageChange}
          onSearchSubmit={this.handleSearchSubmit}
        />
      </div>
    );
  }
}

export default Home;
