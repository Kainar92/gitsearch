import React from "react";
import UserItem from "./UserItem";
import { Link } from "react-router-dom";

import "../css/style.css";

class UserList extends React.Component {
  renderedList = () =>
    this.props.usersList.map(user => {
      return (
        <Link
          key={user.id}
          to={{
            pathname: `user/${user.id}`,
            state: { userId: user.id }
          }}
          style={{ textDecoration: "none", color: "black" }}
        >
          <UserItem user={user} />
        </Link>
      );
    });

  render() {
    if (this.props.totalUsersCount !== 0) {
      return <div className="user-list">{this.renderedList()}</div>;
    } else {
      return null;
    }
  }
}
export default UserList;
