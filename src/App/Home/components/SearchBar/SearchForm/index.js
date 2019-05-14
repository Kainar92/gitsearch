import React, { Component } from "react";

import "./style.css";

class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.skillInputRef = React.createRef();
  }

  componentDidMount() {
    this.skillInputRef.current.focus();
  }

  handleInputChange = event => {
    if (event.target.name === "skill") {
      this.props.onSkillChange(event.target.value);
    } else {
      this.props.onLocationChange(event.target.value);
    }
  };

  handleEnterPress = event => {
    const code = event.keyCode || event.which;

    if (code === 13) {
      this.props.onSearchSubmit();
    }
  };

  render() {
    const { skill, location, onSearchSubmit } = this.props;
    return (
      <>
        <div className="app-header">
          <h1>Github Search</h1>
        </div>
        <div className="ui form">
          <div className="ui field">
            <input
              className="search-input"
              type="text"
              value={skill}
              name="skill"
              placeholder="skill"
              ref={this.skillInputRef}
              onChange={this.handleInputChange}
              onKeyPress={this.handleEnterPress}
            />
            <input
              className="search-input"
              type="text"
              value={location}
              name="location"
              placeholder="location"
              onChange={this.handleInputChange}
              onKeyPress={this.handleEnterPress}
            />
            <input
              className="search-button right floated ui primary button"
              type="submit"
              value="Search"
              onClick={onSearchSubmit}
              disabled={!skill || !location}
            />
          </div>
        </div>
      </>
    );
  }
}

export default SearchForm;
