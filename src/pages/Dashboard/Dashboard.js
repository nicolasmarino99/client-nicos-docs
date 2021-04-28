/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import React, { useEffect, useContext } from 'react';
import { base } from '../../api/apiCalls';
import { TokenContext } from '../../contexts/TokenProvider';
import { UserContext } from '../../contexts/UserProvider';
import AuthParser from '../../algorithms/auth';

const Dashboard = () => {
  const [token, setToken] = useContext(TokenContext);
  const [user, setUser] = useContext(UserContext);

  useEffect(async () => {
    setToken(AuthParser(token).cookieTojson().Token);
    console.log(token);
    const headers = {
      'Content-Type': 'application/json',
      'auth-token': token,
    };

    const result = await axios.get(
      `${base}/users/${AuthParser(token).parseJwt()._id}`,
      { headers },
    );

    setUser(result.data);
  }, [0]);
  return (
    <div className="Dashboard">
      Hey this is the dashboard
      {user}
    </div>
  );
};

export default Dashboard;
