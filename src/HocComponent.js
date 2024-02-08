
import React from 'react'
import UserComponent from './UserComponent';
import AdminComponent from './AdminComponent';
import withAuthentication from './withAuthentication';

const UserWithAuth = withAuthentication(UserComponent);

// Apply the withAuthentication HOC to AdminComponent
const AdminWithAuth = withAuthentication(AdminComponent);


function HocComponent() {
  return (
    <div>
       <h1>Higher-Order Component Example</h1>
      <h2>User Dashboard:</h2>
      <UserWithAuth />
      <hr />
      <h2>Admin Dashboard:</h2>
      <AdminWithAuth />
    </div>
  )
}

export default HocComponent
