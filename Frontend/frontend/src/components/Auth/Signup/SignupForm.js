// src/components/Auth/Signup/SignupForm.js

import React from 'react';
import { Link } from 'react-router-dom';
import authService from '../../../services/authService';

function SignupForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle signup logic using authService
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Username" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button type="submit">Sign Up</button>
      <p>
        Already have an account? <Link to="/login">Log in</Link>
      </p>
    </form>
  );
}

export default SignupForm;
