import React, { useState, useEffect } from 'react';

const withAuthentication = (WrappedComponent) => {
  return (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState('John Doe');

    useEffect(() => {
      // Simulate authentication check (e.g., fetch from server, check local storage)
      setTimeout(() => {
        setIsAuthenticated(true);
      }, 2000);
    }, []);

    return <WrappedComponent isAuthenticated={isAuthenticated} username={username} {...props} />;
  };
};

export default withAuthentication;
