import React from "react";
import Pagination from "react-js-pagination";

import "./style.css";

const PaginatedResult = ({ currentPage, totalUsersCount, onPageChange }) => {
  return (
    <div className={totalUsersCount ? "results" : "results-off"}>
      <span className="user-total">Results: {totalUsersCount}</span>
      <div className="pagination-list">
        <Pagination
          activePage={currentPage}
          totalItemsCount={totalUsersCount}
          pageRangeDisplayed={5}
          onChange={onPageChange}
          itemClass="page-item"
          innerClass="pagination pagination-md justify-content-center"
          linkClass="page-link"
        />
      </div>
    </div>
  );
};

export default PaginatedResult;
