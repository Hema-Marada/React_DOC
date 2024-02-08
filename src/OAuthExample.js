
// src/App.js
import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
{/* <></> */}

const CLIENT_ID = '619308056017-j959m5sbg0p8ncq7lq3khmtoq137l1nl.apps.googleusercontent.com';

function OAuthExample() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onSuccess = (response) => {
    console.log('Login success', response);
    setIsLoggedIn(true);
  };

  const onFailure = (error) => {
    console.error('Login failure', error);
  };

  return (
    <div>
      <h1>Single Sign-On Example</h1>
      {isLoggedIn ? (
        <div>
          <p>You are logged in!</p>
          {/* Your authenticated content here */}
        </div>
      ) : (
        <GoogleLogin
          clientId={CLIENT_ID}
          buttonText="Login with Google"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
        />
      )}
    </div>
  );
}

export default OAuthExample;
