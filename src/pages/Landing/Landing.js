import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => (
  <div className="LandingPage">
    <Link to="/Signin">Sign in</Link>
    <Link to="/login">Login</Link>
    <h1>I am a landing page</h1>
  </div>
);

export default LandingPage;
