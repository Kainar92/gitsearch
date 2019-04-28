import React from "react";
import SearchField from "./SearchField";
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
      <SearchField
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
