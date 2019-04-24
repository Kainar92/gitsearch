import React from "react";
import Pagination from "react-js-pagination";
import "../css/style.css";

const SearchBar = ({
  skill,
  location,
  onChangeSkill,
  onChangeLocation,
  onFormSubmit,
  totalUsersCount,
  currentPage,
  handlePageChange,
  inputFocus,
  onSearchButtonSubmit
}) => {
  return (
    <div className="search-segment">
      <div className="app-header">
        <h1>Github Search</h1>
      </div>
      <div className="ui form">
        <form className="ui field" onSubmit={onFormSubmit}>
          <input
            className="search-input"
            type="text"
            value={skill}
            onChange={onChangeSkill}
            placeholder="skill"
            ref={inputFocus}
          />
          <input
            className="search-input"
            type="text"
            value={location}
            onChange={onChangeLocation}
            placeholder="location"
          />
          <input
            className="search-button right floated ui primary button"
            type="submit"
            value="Search"
            onClick={onSearchButtonSubmit}
            disabled={!skill || !location}
          />
        </form>
      </div>
      <div className={totalUsersCount ? "results" : "results-off"}>
        <span className="user-total">Results: {totalUsersCount}</span>
        <div className="pagination-list">
          <Pagination
            activePage={currentPage}
            totalItemsCount={totalUsersCount}
            pageRangeDisplayed={5}
            onChange={handlePageChange}
            itemClass="page-item"
            innerClass="pagination pagination-md justify-content-center"
            linkClass="page-link"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
