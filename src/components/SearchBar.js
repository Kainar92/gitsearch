import React from "react";
import Pagination from "react-js-pagination";
import "./index.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skill: "",
      location: "",
      activePage: 1
    };
    this.inputFocus = React.createRef();
  }

  componentDidMount = () => {
    this.inputFocus.current.focus();
  };

  onChangeSkill = event => {
    this.setState({ skill: event.target.value });
  };

  onChangeLocation = event => {
    this.setState({ location: event.target.value });
  };

  handlePageChange = async pageNumber => {
    await this.setState({ activePage: pageNumber });
    await this.onPagesSubmit();
  };

  onPagesSubmit = () => {
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

  onSearchSubmit = event => {
    event.preventDefault();
    this.setState({ activePage: 1 });
    if (this.state.location === "" || this.state.skill === "") {
      return 0;
    } else {
      this.props.onFormSubmit(this.state.skill, this.state.location);
    }
  };

  render() {
    return (
      <div className="search-segment">
        <div className="app-header">
          <h1>Github Search</h1>
        </div>
        <div className="ui form">
          <form className="ui field" onSubmit={this.onSearchSubmit}>
            <input
              className="search-input"
              type="text"
              value={this.state.skill}
              onChange={this.onChangeSkill}
              placeholder="skills"
              ref={this.inputFocus}
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
              onClick={this.onSearchSubmit}
            />
          </form>
        </div>
        <div className={this.props.totalUsersCount ? "results" : "results-off"}>
          <span className="user-total">
            Results: {this.props.totalUsersCount}
          </span>
          <div className="pagination-list">
            <Pagination
              activePage={this.state.activePage}
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
