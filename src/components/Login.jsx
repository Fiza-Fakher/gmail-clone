// src/components/LoginPage.jsx
import React from 'react';
import { GoogleLogin } from '@react-oauth/google';

function LoginPage() {
  const handleLoginSuccess = (response) => {
    console.log('Login Success:', response);
    // Handle successful login here
  };

  const handleLoginFailure = (response) => {
    console.error('Login Failed:', response);
    // Handle failed login here
  };

  return (
    <div>
      <h1>Login with Google</h1>
      <GoogleLogin
        onSuccess={handleLoginSuccess}
        onFailure={handleLoginFailure}
      />
    </div>
  );
}

export default LoginPage;
