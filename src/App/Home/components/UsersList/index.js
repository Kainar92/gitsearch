import React from "react";
import UserItem from "./UserItem";
import { Link } from "react-router-dom";

import "./style.css";

const UsersList = ({ usersList, totalUsersCount }) => {
  if (totalUsersCount) {
    return (
      <div className="user-list">
        {usersList.map(user => {
          const { id } = user;
          return (
            <Link
              key={id}
              to={{
                pathname: `user/${id}`,
                state: { userId: id }
              }}
              style={{ textDecoration: "none", color: "black" }}
            >
              <UserItem user={user} />
            </Link>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
};
export default UsersList;
