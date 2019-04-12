import React from "react";
import UserItem from "./UserItem";

import "./index.css";

class UserList extends React.Component {
  renderedList = () =>
    this.props.usersList.map(user => {
      return <UserItem key={user.id} user={user} />;
    });
  render() {
    if (this.props.totalUsersCount) {
      return <div className="user-list">{this.renderedList()}</div>;
    } else {
      return null;
    }
  }
}
export default UserList;
