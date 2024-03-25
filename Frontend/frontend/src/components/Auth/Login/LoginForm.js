// src/components/Auth/Login/LoginForm.js

import React from 'react';
import { Link } from 'react-router-dom';
import authService from '../../../services/authService';

function LoginForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle login logic using authService
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button type="submit">Login</button>
      <p>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>
    </form>
  );
}

export default LoginForm;
