import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {

  const githubContext = useContext(GithubContext);
  const alerContext = useContext(AlertContext);

  // State
  const [text, setText] = useState('');

  // Functions
  const updateText = e => setText(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      alerContext.setAlert('Please enter something...', 'light');
    } else {
      githubContext.searchUser(text);
      setText('');
    }
  };

  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <input type="text" value={text} name="text" onChange={updateText} placeholder="Search User..." />
        <input type="submit" value="Search" className="btn btn-dark btn-block" />
      </form>
      {githubContext.users.length > 0 && (<button className="btn btn-light btn-block" onClick={githubContext.clearUsers}>Clear</button>)}
    </div>
  )
}

export default Search;
