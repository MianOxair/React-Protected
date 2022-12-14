// src/components/login-button.js

import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      
      onClick={() => loginWithRedirect()}
      className="btn btn-primary btn-block"
    >
      Log In
    </button>
  );
};

export default LoginButton;