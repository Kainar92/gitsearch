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
    activePage: 1,
    totalPagesCount: 0,
    isloading: false
  };

  memoizingFunction = () => {
    return this.state.usersList;
  };

  onSearchSumbit = async (skill, location, page = 1) => {
    this.setState({ isloading: true });
    const responce = await github.get(
      `/search/users?&q=location:${location}+language:${skill}&page=${page}`
    );
    const totalUsersCount = responce.data.total_count;
    let totalPagesCount = Math.ceil(totalUsersCount / 10);
    var urls = await Promise.all(
      responce.data.items.map(async profile => {
        return await github.get(profile.url).then(responce => {
          return responce.data;
        });
      })
    );
    this.setState({
      usersList: urls,
      totalUsersCount,
      totalPagesCount,
      isloading: false
    });
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
          onSubmit={this.onSearchSumbit}
        />
        <SearchBar
          onFormSubmit={this.onSearchSumbit}
          activePage={this.state.activePage}
          totalUsersCount={this.state.totalUsersCount}
          totalPagesCount={this.state.totalPagesCount}
          onSubmit={this.onSearchSumbit}
        />
      </div>
    );
  }
}
