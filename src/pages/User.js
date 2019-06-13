import React from 'react';
import { Link } from 'react-router-dom';

const User = ({ match, location, history }) => {
  console.log(match);
  console.log(location);
  console.log(history);
  return (
    <div>
      User
      <Link to="/">Home</Link>
      <button onClick={() => history.push('/')}>Home</button>
    </div>
  );
};

export default User;
