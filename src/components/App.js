import React from "react";
import github from "../api/github";
import WellComePage from "../components/WellcomePage";
import Spinner from "./Spinner";
import SearchBar from "./SearchBar";
import UserList from "./UserList";
import "../css/style.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usersList: [],
      totalUsersCount: 0,
      isloading: false,
      skill: "",
      location: "",
      currentPage: 1
    };
    this.inputFocus = React.createRef();
  }

  onChangeSkill = event => {
    this.setState({ skill: event.target.value });
    localStorage.setItem("skill", JSON.stringify(event.target.value));
  };

  onChangeLocation = event => {
    this.setState({ location: event.target.value });
    localStorage.setItem("location", JSON.stringify(event.target.value));
  };

  handlePageChange = async pageNumber => {
    await this.setState({ currentPage: pageNumber });
    await this.onFormSumbit();
  };

  onSearchButtonSubmit = event => {
    event.preventDefault();
    this.setState({ currentPage: 1 });
    if (this.state.location === "" || this.state.skill === "") {
      return 0;
    } else {
      this.onFormSumbit();
    }
  };

  onFormSumbit = async () => {
    await this.fetchData();
  };

  fetchData = async () => {
    const { skill, location, currentPage, totalUsersCount } = this.state;
    if (
      !localStorage.getItem("pageUsersList") ||
      !JSON.parse(localStorage.getItem("pageUsersList"))[
        `${currentPage}-${skill}-${location}-${totalUsersCount}`
      ]
    ) {
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
      this.cacheData();
    } else {
      const cache = JSON.parse(localStorage.pageUsersList);
      this.setState({
        usersList:
          cache[`${currentPage}-${skill}-${location}-${totalUsersCount}`],
        totalUsersCount: JSON.parse(localStorage.totalUsersCount)
      });
    }
  };

  cacheData = () => {
    const {
      currentPage,
      skill,
      location,
      totalUsersCount,
      usersList
    } = this.state;

    var pageUsersList = JSON.parse(localStorage.getItem("pageUsersList")) || {};

    pageUsersList[
      `${currentPage}-${skill}-${location}-${totalUsersCount}`
    ] = usersList;

    localStorage.setItem("pageUsersList", JSON.stringify(pageUsersList));
    localStorage.setItem("totalUsersCount", JSON.stringify(totalUsersCount));
    localStorage.setItem("currentPage", JSON.stringify(currentPage));
  };

  componentDidUpdate = () => {
    sessionStorage.setItem("isFirstMounted", "false");
  };

  componentDidMount = () => {
    this.inputFocus.current.focus();
    if (sessionStorage.getItem("isFirstMounted") === "true") {
      return;
    } else {
      this.setState(
        {
          skill: JSON.parse(localStorage.skill),
          location: JSON.parse(localStorage.location),
          currentPage: JSON.parse(localStorage.currentPage)
        },
        () => {
          this.fetchData();
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
      isloading,
      usersList
    } = this.state;
    return (
      <div className="main-wrapper">
        {totalUsersCount === 0 && isloading === false ? <WellComePage /> : null}
        {isloading ? <Spinner /> : null}
        {!isloading ? (
          <UserList usersList={usersList} totalUsersCount={totalUsersCount} />
        ) : null}
        <SearchBar
          onChangeSkill={this.onChangeSkill}
          onChangeLocation={this.onChangeLocation}
          usersList={usersList}
          onFormSubmit={this.onFormSumbit}
          totalUsersCount={totalUsersCount}
          inputFocus={this.inputFocus}
          handlePageChange={this.handlePageChange}
          onSearchButtonSubmit={this.onSearchButtonSubmit}
          currentPage={currentPage}
          skill={skill}
          location={location}
        />
      </div>
    );
  }
}
