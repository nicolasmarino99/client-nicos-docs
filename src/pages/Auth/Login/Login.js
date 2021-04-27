import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../../contexts/UserProvider';
import { logginUserRequest } from '../../../api/apiCalls';

const Login = () => {
    const [user, setUser] = useContext(UserContext);

  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    errors: '',
  });

  const { email, password } = credentials;


  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = credentials;
    const user = {
      email,
      password,
    };
    logginUserRequest(user, setUser, history, credentials, setCredentials);
  };

  

    return (
        <div className="Login">
            <form onSubmit={handleSubmit}>

                <div controlId="formBasicEmail">
                    <label for="email">email</label>
                    <input 
                        type="text" 
                        id="email" 
                        name="email"
                        value={email}
                        onChange={handleChange} 
                    />
                </div>

                <div controlId="formBasicPassword">
                    <label for="password">password</label>
                    <input 
                        type="text" 
                        id="password" 
                        name="password"
                        value={password}
                        onChange={handleChange} 
                    />
                </div>

                <input type="submit" value="Log In" />
                or
                <Link to="/signin">sign up</Link>
            </form>
        </div>
    );
}

export default Login;
