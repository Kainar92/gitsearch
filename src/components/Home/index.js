import React, { Component } from "react";
import { fetchRequest } from "./api/service";
import { cacheRequest } from "./api/itils";
import WellcomePage from "../WellcomePage";
import Spinner from "../Spinner";
import SearchBar from "../SearchBar";
import UsersList from "../UsersList";
import ScrollEventHandler from "../ScrollEventHandler";

import "./style.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usersList: [],
      totalUsersCount: 0,
      isLoading: false,
      skill: "",
      location: "",
      currentPage: 1
    };
  }

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
    this.submitData().then(() => window.scrollTo(0, 0));
  };

  handleSearchSubmit = async () => {
    await this.setState({ currentPage: 1 });
    this.submitData();
  };

  submitData = async () => {
    const {
      skill,
      location,
      currentPage,
      totalUsersCount,
      usersList
    } = this.state;

    const localPageUsersList = localStorage.getItem("pageUsersList");
    const key = `${skill}-${location}-${currentPage}-${totalUsersCount}`;

    if (!localPageUsersList || !JSON.parse(localPageUsersList)[key]) {
      this.setState({ isLoading: true });
      fetchRequest(skill, location, currentPage).then(usersListFromRequest => {
        this.setState({
          usersList: usersListFromRequest["usersList"],
          totalUsersCount: usersListFromRequest["totalUsersCount"],
          isLoading: false
        }).then(() => {
          cacheRequest(
            skill,
            location,
            currentPage,
            totalUsersCount,
            usersList
          );
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

  componentDidMount = () => {
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
          this.submitData().then(() => {
            if (localStorage.scrollPosition) {
              window.scrollTo(0, JSON.parse(localStorage.scrollPosition));
            }
          });
        }
      );
    }
  };

  render() {
    const {
      skill,
      location,
      currentPage,
      totalUsersCount,
      isLoading,
      usersList
    } = this.state;
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
          skill={skill}
          location={location}
          currentPage={currentPage}
          totalUsersCount={totalUsersCount}
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
