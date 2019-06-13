import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {

  state = {
    text: ''
  }

  static propTypes = {
    searchUser: PropTypes.func.isRequired,
    clear: PropTypes.func.isRequired,
    resultShown: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
  }

  updateText = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    if (this.state.text === '') {
      this.props.setAlert('Please enter something...', 'light');
    } else {
      this.props.searchUser(this.state.text);
      this.setState({ text: '' });

    }
  };

  render() {
    const { resultShown, clear } = this.props;
    return (
      <div>
        <form className="form" onSubmit={this.onSubmit}>
          <input type="text" value={this.state.text} name="text" onChange={this.updateText} placeholder="Search User..." />
          <input type="submit" value="Search" className="btn btn-dark btn-block" />
        </form>
        {resultShown && (<button className="btn btn-light btn-block" onClick={clear}>Clear</button>)}
      </div>
    )
  }
}

export default Search;
