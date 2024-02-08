import React from 'react';

const UserComponent = ({ username }) => {
  return (
    <div>
      <h2>Welcome, {username}!</h2>
      <p>This is the user dashboard.</p>
    </div>
  );
};

export default UserComponent;
