import React from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../contexts/UserProvider';

const LandingPage = () => (
  <div className="LandingPage">
    <Link to="/Signin">Sign in</Link>
    <Link to="/login">Login</Link>
  </div>
);

export default LandingPage;
