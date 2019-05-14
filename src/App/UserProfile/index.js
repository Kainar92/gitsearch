import React, { Component } from "react";
import { githubApi } from "../api/service";
import Spinner from "../Spinner";

import "./style.css";

class UserProfile extends Component {
  state = {
    user: [],
    isLoading: false
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    const userId = this.props.location.state.userId;
    const { data: user } = await githubApi.get(`user/${userId}`);
    this.setState({ user, isLoading: false });
  }

  render() {
    const {
      isLoading,
      user: { avatar_url, name, login, email, company, location }
    } = this.state;
    return (
      <div className="ui container user-profile">
        <div className="user-item profile-item">
          {isLoading ? (
            <Spinner type="centered" />
          ) : (
            <>
              <div className="user-avatar">
                <img className="ui image large" src={avatar_url} alt="" />
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
                <hr />
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default UserProfile;
