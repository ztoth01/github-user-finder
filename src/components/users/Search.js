import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchUser, clear, resultShown, setAlert }) => {

  const [text, setText] = useState('');

  const updateText = e => setText(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      setAlert('Please enter something...', 'light');
    } else {
      searchUser(text);
      setText('');
    }
  };

  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <input type="text" value={text} name="text" onChange={updateText} placeholder="Search User..." />
        <input type="submit" value="Search" className="btn btn-dark btn-block" />
      </form>
      {resultShown && (<button className="btn btn-light btn-block" onClick={clear}>Clear</button>)}
    </div>
  )
}

Search.propTypes = {
  searchUser: PropTypes.func.isRequired,
  clear: PropTypes.func.isRequired,
  resultShown: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired
}

export default Search;
