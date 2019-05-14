import React from "react";
import SearchForm from "./SearchForm";
import PaginatedResult from "./PaginatedResult";

import "./style.css";

const SearchBar = ({
  skill,
  location,
  currentPage,
  totalUsersCount,
  onSkillChange,
  onLocationChange,
  onPageChange,
  onSearchSubmit
}) => {
  return (
    <div className="search-segment">
      <SearchForm
        skill={skill}
        location={location}
        onSkillChange={onSkillChange}
        onLocationChange={onLocationChange}
        onSearchSubmit={onSearchSubmit}
      />
      <PaginatedResult
        currentPage={currentPage}
        totalUsersCount={totalUsersCount}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default SearchBar;
