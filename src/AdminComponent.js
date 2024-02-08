import React from 'react';

const AdminComponent = ({ username }) => {
  return (
    <div>
      <h2>Welcome, Admin {username}!</h2>
      <p>This is the admin dashboard.</p>
    </div>
  );
};

export default AdminComponent;
