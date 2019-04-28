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
              onChange={e => onSkillChange(e.target.value)}
              placeholder="skill"
              ref={this.inputFocus}
            />
            <input
              className="search-input"
              type="text"
              value={location}
              onChange={e => onLocationChange(e.target.value)}
              placeholder="location"
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
