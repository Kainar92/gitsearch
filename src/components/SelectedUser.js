import React from "react";
import github from "../api/github";
import Spinner from "./Spinner";
import "../css/style.css";

class SelectedUser extends React.Component {
  state = {
    user: [],
    isloading: false,
    loaderType: "centered"
  };

  componentDidMount = async () => {
    this.setState({ isloading: true });
    const userId = this.props.location.state.userId;
    const userResponse = await github.get(`user/${userId}`);
    await this.setState({ user: userResponse.data, isloading: false });
  };

  render() {
    const { user, isloading } = this.state;
    return (
      <div className="ui container" style={{ paddingTop: "20px" }}>
        <div className="user-item" style={{ height: "500px" }}>
          {isloading ? (
            <Spinner type={this.state.loaderType} />
          ) : (
            <SelectedUserData user={user} />
          )}
        </div>
      </div>
    );
  }
}

const SelectedUserData = ({ user }) => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default SelectedUser;
