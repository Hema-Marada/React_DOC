import React, { useState } from 'react';
import OAuthExample from './OAuthExample'
function Sample() {
    const [currentUser, setCurrentUser] = useState(null);

    const handleLogin = (userData) => {
      setCurrentUser(userData);
    };
  return (
    <div>
    <h1>Single Sign-On Example</h1>
    {currentUser ? (
      <div>
        <p>You are logged in as {currentUser.name}!</p>
        {/* Display authenticated content */}
      </div>
    ) : (
      <OAuthExample onLogin={handleLogin} />
    )}
  </div>
  )
}

export default Sample
