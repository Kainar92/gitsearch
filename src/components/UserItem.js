import React from "react";
import "./index.css";

const UserItem = ({ user }) => {
  return (
    <div className="user-item">
      <div className="user-avatar">
        <img src={user.avatar_url} alt="" />
      </div>
      <div className="user-info">
        <div className="user-header">
          <h2>{!user.name ? "No name" : user.name}</h2>
        </div>
        <div className="user-subtext">
          <i className="large id card icon" />
          <p>{user.login}</p>
        </div>
        <div className="user-subtext">
          <i className="large envelope outline icon" />
          <p>{!user.email ? "No email" : user.email}</p>
        </div>
        <div className="user-subtext">
          <i className="large building icon" />
          <p>{!user.company ? "No company" : user.company}</p>
        </div>
        <div className="user-subtext">
          <i className="large location arrow icon" />
          <p>{!user.location ? "No location" : user.location}</p>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
