import React, { Component } from "react";
import "./style.css";

class SearchField extends Component {
  constructor(props) {
    super(props);
    this.inputFocus = React.createRef();
  }

  componentDidMount = () => {
    this.inputFocus.current.focus();
  };

  handleEnterPressed = event => {
    const code = event.keyCode || event.which;
    if (code === 13) {
      this.props.onSearchSubmit();
    }
  };

  render() {
    const {
      skill,
      location,
      onSkillChange,
      onLocationChange,
      onSearchSubmit
    } = this.props;
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
              placeholder="skill"
              ref={this.inputFocus}
              onChange={e => onSkillChange(e.target.value)}
              onKeyPress={this.handleEnterPressed}
            />
            <input
              className="search-input"
              type="text"
              value={location}
              placeholder="location"
              onChange={e => onLocationChange(e.target.value)}
              onKeyPress={this.handleEnterPressed}
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

export default SearchField;
