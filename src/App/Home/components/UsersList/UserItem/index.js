import React from "react";
import "./style.css";

const UserItem = ({ user }) => {
  const { avatar_url, name, login, email, company, location } = user;
  return (
    <div className="user-item">
      <div className="user-avatar">
        <img src={avatar_url} alt="" />
      </div>
      <div className="user-info">
        <div className="user-header">
          <h2>{!name ? "No name" : name}</h2>
        </div>
        <div className="user-subtext">
          <i className="large id card icon" />
          <p>{login}</p>
        </div>
        <div className="user-subtext">
          <i className="large envelope outline icon" />
          <p>{!email ? "No email" : email}</p>
        </div>
        <div className="user-subtext">
          <i className="large building icon" />
          <p>{!company ? "No company" : company}</p>
        </div>
        <div className="user-subtext">
          <i className="large location arrow icon" />
          <p>{!location ? "No location" : location}</p>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
