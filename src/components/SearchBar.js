import React from "react";
import Pagination from "react-js-pagination";
import "./index.css";

class SearchBar extends React.Component {
  state = {
    skill: "",
    location: "",
    activePage: 1
  };

  onChangeSkill = event => {
    this.setState({ skill: event.target.value });
  };

  onChangeLocation = event => {
    this.setState({ location: event.target.value });
  };

  onSubmit = () => {
    if (this.state.location === "" || this.state.skill === "") {
      return 0;
    } else {
      this.props.onFormSubmit(
        this.state.skill,
        this.state.location,
        this.state.activePage
      );
    }
  };

  handlePageChange = async pageNumber => {
    await this.setState({ activePage: pageNumber });
    await this.onSubmit(
      this.state.skill,
      this.state.location,
      this.state.activePage
    );
  };

  render() {
    return (
      <div className="search-segment">
        <div className="app-header">
          <h1>Github Search</h1>
        </div>
        <div className="ui form">
          <div className="ui field">
            <input
              className="search-input"
              type="text"
              value={this.state.skill}
              onChange={this.onChangeSkill}
              placeholder="skills"
            />
            <input
              className="search-input"
              type="text"
              value={this.state.location}
              onChange={this.onChangeLocation}
              placeholder="location"
            />
            <input
              className="search-button right floated ui primary button"
              type="submit"
              value="Search"
              onClick={this.onSubmit}
            />
          </div>
        </div>
        <div className={this.props.totalUsersCount ? "results" : "results-off"}>
          <span className="user-total">
            Results: {this.props.totalUsersCount}
          </span>
          <div className="pagination-list">
            <Pagination
              activePage={this.state.activePage}
              itemsCountPerPage={10}
              totalItemsCount={this.props.totalUsersCount}
              pageRangeDisplayed={5}
              onChange={this.handlePageChange}
              itemClass="page-item"
              innerClass="pagination pagination-md justify-content-center"
              linkClass="page-link"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
