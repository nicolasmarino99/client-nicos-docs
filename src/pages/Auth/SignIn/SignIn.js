/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { apiVersion, logginUserRequest } from '../../../api/apiCalls';
import { TokenContext } from '../../../contexts/TokenProvider';

const SignIn = () => {
  const [token, setToken] = useContext(TokenContext);

  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    password: '',
    errors: '',
  });

  const { name, email, password } = credentials;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, password } = credentials;
    const user = {
      name,
      email,
      password,
    };
    logginUserRequest(user, setToken, history, credentials, setCredentials, `${apiVersion}/user/auth/register`);
  };

  return (
    <div className="SignIn">
      <form onSubmit={handleSubmit}>

        <div controlId="formBasicName">
          <label htmlFor="name">name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </div>

        <div controlId="formBasicEmail">
          <label htmlFor="email">email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>

        <div controlId="formBasicPassword">
          <label htmlFor="password">password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </div>

        <input type="submit" value="Sign up" />
        or
        <Link to="/login">Log In</Link>
      </form>
    </div>
  );
};

export default SignIn;
