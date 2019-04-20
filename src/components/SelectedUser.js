import React from "react";
import github from "../api/github";
import "./index.css";

class SelectedUser extends React.Component {
  state = {
    user: []
  };

  componentDidMount = async () => {
    const userId = this.props.location.state.userId;
    const userResponse = await github.get(`user/${userId}`);
    await this.setState({ user: userResponse.data });
  };

  render() {
    const user = this.state.user;
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <div className="user-item" style={{ height: "100vh" }}>
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
            <hr />
          </div>
        </div>
      </div>
    );
  }
}

export default SelectedUser;
